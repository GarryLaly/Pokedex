import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { IconBack, IconFavoriteInActive } from '../assets/icons';

const Header = ({navigation, isBack = true, isFavorite = false, title}) => {
  return (
      <View style={styles.container}>
        {isBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IconBack} style={styles.icon} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.empty} />
        {isBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IconFavoriteInActive} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 14,
    paddingBottom: 18,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  empty: {
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: 'robotobold',
    fontSize: 20,
  },
});
