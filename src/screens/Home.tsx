import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
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
