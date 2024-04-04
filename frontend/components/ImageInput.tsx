import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from './Themed';

import { launchImageLibrary } from 'react-native-image-picker';
import { string } from 'prop-types';
import { Asset } from 'expo-asset';

async function query(filename: string) {
  const data = new Blob([filename], {type: "image"});
  const response = await fetch(
    'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
    {
      headers: { Authorization: 'Bearer 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' },
      method: 'POST',
      body: data
    }
  );
  const result = await response.json();
  return result;
}

export default function ImageInput() {
  let text: string = "responses will load here...\n"
  return <View>
    <Button
      title={'Upload Images'}
      onPress={() => text = text + "hello\n"
        /* THIS CODE DOES NOT WORK YET
        launchImageLibrary({ mediaType: 'photo' }, ((response) => {
            switch (response.assets) {
              case undefined:
                return text + "error\n"
              default:
                response.assets?.forEach((pic) => {
                    let uri = pic.uri;
                    switch (uri) {
                      case undefined:
                        return text + "error\n";
                      default :
                        return text + query(uri) + "\n";
                    }
                  }
                )
            }
          }
          )
        )
         */
      }
    />
    <Text>
      {text}
    </Text>
  </View>;
}