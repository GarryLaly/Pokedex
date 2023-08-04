import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';
import { SvgUri } from 'react-native-svg';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <SvgUri
          width={200}
          height={200}
          uri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: 'robotobold',
    fontSize: 24,
  },
});
