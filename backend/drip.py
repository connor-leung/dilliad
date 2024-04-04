#imports
from langchain_openai import ChatOpenAI
from langchain_community.utilities import SQLDatabase
from langchain.chains import create_sql_query_chain
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_community.tools.sql_database.tool import QuerySQLDataBaseTool
from operator import itemgetter

import re
import ast

#enviornment setup
import os
from dotenv import load_dotenv

def string_to_tuple(input_string):
    # Find all occurrences of text within parentheses
    matches = re.findall(r'\((.*?)\)', input_string)
    
    # Convert each match to a tuple using ast.literal_eval
    tuples = []
    for match in matches:
        try:
            # Safely evaluate the match as a Python expression
            evaluated_tuple = ast.literal_eval(f"({match})")
            # Ensure the result is a tuple (single values won't automatically become tuples)
            if not isinstance(evaluated_tuple, tuple):
                evaluated_tuple = (evaluated_tuple,)
            tuples.append(evaluated_tuple)
        except ValueError:
            # Handle cases where the string cannot be evaluated as a tuple
            # This could be due to syntax errors or security restrictions of literal_eval
            print(f"Could not evaluate '{match}' as a tuple.")
    
    return tuples

def getOutfit(themes):
  #prompting
  question = f"Using the items in the database, choose me an one outfit with one topwear and one bottom wear for a {themes} night out using the join function to have only one SQL query. Query at least 10 items in the database."
  #set up the database
  load_dotenv('.env')
  db = SQLDatabase.from_uri("sqlite:///clothes.db")
  #test database connection
  if db.run("SELECT * FROM wardrobe LIMIT 1, 10"):
      print("Database connection successful") #error handling for database connection needs to be done
  else:
      print("Database connection failed")
      return

  #configuration
  llm = ChatOpenAI(openai_api_key=OPENAIKEY, model="gpt-3.5-turbo", temperature=0)
  chain = create_sql_query_chain(llm, db)
  # chain.get_prompts()[0].pretty_print()
  execute_query = QuerySQLDataBaseTool(db=db)

  write_query = create_sql_query_chain(llm, db)
  chain = write_query | execute_query

  answer_prompt = PromptTemplate.from_template(
      """Given the following user question, corresponding SQL query, and SQL result, answer the user question with an SQL query in the format of SELECT * FROM wardrobe WHERE itemName IN ('INSERT TOPWEAR HERE', 'INSERT BOTTOMWEAR HERE');.

  Question: {question}
  SQL Query: {query}
  SQL Result: {result}
  Answer: """
  )

  answer = answer_prompt | llm | StrOutputParser()
  chain = (
      RunnablePassthrough.assign(query=write_query).assign(
          result=itemgetter("query") | execute_query
      )
      | answer
  )
#   db.close()
  #agent running

  input = chain.invoke({"question": question})
  print("success")
  result = string_to_tuple(input)
  return result
  


if __name__ == "__main__":
  x = getOutfit()