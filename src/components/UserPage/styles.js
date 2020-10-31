import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px 0;
`;

export const UserPhoto = styled.Image`
  border-radius: 50px;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const UserAge = styled.Text`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserEmail = styled.Text`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserPhone = styled.Text`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserCity = styled.Text`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BorderBottom = styled.View`
  width: 100%;
  border-bottom-width: 3px;
  border-bottom-color: #cccccc;
  padding-bottom: 25px;
  margin-bottom: 20px;
`;

export const UserGender = styled.Text`
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  letter-spacing: 3px;
  color: #1565e6;
  text-transform: uppercase;
`;
