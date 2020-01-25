import styled from 'styled-components/native';

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


