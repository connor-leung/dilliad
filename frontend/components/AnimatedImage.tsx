import React, { useEffect } from 'react';
import { LogBox, View, Image, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


interface AnimatedImageProps {
  imageUrl: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ imageUrl }) => {
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(Math.random() * 30 - 15);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    rotation.value = withTiming(1, { duration: 10 });
    // Rotate value could also be animated here if needed
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  LogBox.ignoreLogs(['Reanimated 2']);

  // Directly apply the animatedStyle to the View component
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.image, animatedStyle]}/> 
      <Image source={{ uri: imageUrl }} style={StyleSheet.absoluteFill} resizeMode={'cover'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    overflow: 'hidden', // Ensure the image is contained within the bounds of the View
  },
});

export default AnimatedImage;

