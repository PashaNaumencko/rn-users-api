import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  UserThumbnailPhoto,
  UserDescription,
  UserFullName,
  UserPhone
} from './styles';

const UserItem = ({
  onUserPress,
  picture: { thumbnail: avatarUrl },
  name: { first, last },
  phone
}) => (
  <TouchableOpacity
    onPress={onUserPress}
  >
    <Container>
      <UserThumbnailPhoto source={{ uri: avatarUrl }} />
      <UserDescription>
        <UserFullName>
          {first} {last}
        </UserFullName>
        <UserPhone>
          {phone}
        </UserPhone>
      </UserDescription>
    </Container>
  </TouchableOpacity>
);

export default UserItem;
