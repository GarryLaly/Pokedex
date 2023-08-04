import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    robotobold: require('./Roboto-Bold.ttf'),
    robotomedium: require('./Roboto-Medium.ttf'),
    robotregular: require('./Roboto-Regular.ttf'),
  });

export default useFonts