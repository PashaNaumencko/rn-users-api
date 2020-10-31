import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  UserPhoto,
  UserAge,
  UserEmail,
  UserPhone,
  UserCity,
  UserGender,
  BorderBottom
} from './styles';

const UserPage = ({ navigation }) => {
  const {
    picture: { large: imgUrl },
    dob: { age },
    email,
    phone,
    location: { city, state },
    gender
  } = navigation.getParam('user');
  return (
    <Container>
      <UserPhoto source={{ uri: imgUrl }} />
      <UserAge>I have {age} years old</UserAge>
      <UserEmail>{email}</UserEmail>
      <UserPhone>{phone}</UserPhone>
      <BorderBottom>
        <UserCity>{city}, {state}</UserCity>
      </BorderBottom>
      <UserGender>{gender}</UserGender>
    </Container>
  );
};

UserPage.navigationOptions = ({ navigation }) => {
  const { name: { first, last } } = navigation.getParam('user');
  const title = `${first} ${last}` || 'Untitled';
  return {
    title
  };
};

UserPage.propTypes = {
  navigation: PropTypes.object,
  getParam: PropTypes.func
};

export default UserPage;
