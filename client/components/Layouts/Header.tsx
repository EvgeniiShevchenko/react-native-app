import React from 'react';
import styled from 'styled-components/native';

export default () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo source={require('client/assets/images/logo.png')} />
      </LogoWrapper>
      <Title>User Table</Title>
    </Container>
  );
};

const Container = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;

  min-height: 60px;
  background: #c0e8f3;
`;

const LogoWrapper = styled.View`
  margin-left: 20px;
  width: 40px;
  height: 40px;
`;

const Logo = styled.Image`
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  position: absolute;
  text-align: center;
  width: 100%;
`;
