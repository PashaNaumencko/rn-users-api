import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
    Container,
    UserPhoto,
    UserDescription,
    UserFullName,
    UserPhone
} from './styles';

const UserItem = ({ onUserPress, avatarUrl }) => (
  <TouchableOpacity
  //   onPress={onUserPress(item)}
  >
      <Container>
          <UserPhoto source={{ uri: avatarUrl }} />
          <UserDescription>
              <UserFullName>
                  Pavlo Naumenko
              </UserFullName>
              <UserPhone>
                  (+380)66-370-58-43
              </UserPhone>
          </UserDescription>
      </Container>
  </TouchableOpacity>
);

export default UserItem;
