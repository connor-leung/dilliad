import React, { useState } from "react";
import { gptCall } from "../gpt/gpt";
import { View, TextInput, Text, Button } from "react-native";

export default function InputTesting() {
    const [message, setMessage] = useState(""); // State for input message
    const [response, setResponse] = useState(""); // State for GPT response

    const handleSubmit = async () => {
        try {
            const gptResponse = await gptCall(message);
            if (gptResponse !== null) {
                setResponse(gptResponse);
            } else {
                setResponse("Received null response");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponse("Failed to get response");
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                multiline
                placeholder="Enter GPT response here"
                value={message}
                onChangeText={text => setMessage(text)}
                style={{ height: 100, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 10 }}
            />
            <Button
                title="Click here to send"
                onPress={handleSubmit}
            />
            <Text>{response}</Text>
        </View>
    );
}
