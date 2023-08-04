import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text, FlatList} from 'react-native';
import { SvgUri } from 'react-native-svg';
import axios from 'axios';

import Header from '../components/Header';

const Home = ({navigation}) => {
  const [pokeList, setPokeList] = useState([]);

  const getPokeList = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const {results} = response.data;
    setPokeList(results);
  }

  useEffect(() => {
    getPokeList();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.container}>
        <Header navigation={navigation} title="Pokedex" />
        <FlatList
          data={pokeList}
          renderItem={({item, index}) => (
            <View>
              <SvgUri
                width={200}
                height={200}
                uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item?.url?.split('/')[item?.url?.split('/')?.length - 2]}.svg`}
              />
              <Text style={styles.text}>{item?.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.url}
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
  },
  text: {
    fontFamily: 'robotobold',
    fontSize: 24,
  },
});
