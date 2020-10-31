import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 7px;
`;

export const UserThumbnailPhoto = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 15px;
`;

export const UserDescription = styled.View`
  display: flex;
  padding: 5px 0;
  flex: 1;
  justify-content: space-between;
`;

export const UserFullName = styled.Text`
  font-weight: 500;
  font-size: 22px;
`;

export const UserPhone = styled.Text`
  font-weight: 300;
  font-size: 16px;
`;
