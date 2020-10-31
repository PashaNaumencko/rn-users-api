import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const PhotoPage = ({ navigation }) => {
  const { urls: { regular: imgUrl } } = navigation.getParam('photoInfo');
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imgUrl }} />
    </View>
  );
};

PhotoPage.navigationOptions = ({ navigation }) => {
  const { description } = navigation.getParam('photoInfo');
  const title = description || 'Untitled';
  return {
    title
  };
};


PhotoPage.propTypes = {
  navigation: PropTypes.object,
  getParam: PropTypes.func
};

export default PhotoPage;