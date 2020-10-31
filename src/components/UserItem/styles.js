import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
`;

export const UserPhoto = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin-right: 7px;
`;

export const UserDescription = styled.View`
    display: flex;
    flex: 1;
`;

export const UserFullName = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

export const UserPhone = styled.Text`
  font-weight: 300;
  font-size: 11px;
`;

