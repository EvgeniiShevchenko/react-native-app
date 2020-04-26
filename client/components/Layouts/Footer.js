import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <Title>Footer</Title>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 100px;
  background: #c0e8f3;
`;

const Title = styled.Text``;
