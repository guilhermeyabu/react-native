import styled from 'styled-components/native';

export const AppText = styled.Text`
    font-size: 22px;
    margin-top: 10px;
    align-self: center;
    font-family: fantasy;
`;

export const UserText = styled(AppText)`
    font-size: 16px;
    margin-top: 0px;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const UserPhoto = styled.Image`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-bottom: 20px;
`;


