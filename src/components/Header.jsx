import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Heading>Carta Healthcare</Heading>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  padding-top: 5%;
  padding:bottom: 5%;
  text-align: center;
  background-color: rgb(50, 77, 86);
  color: rgb(255,255,255);
  font-size: 80px;
  font-weight: 300;
  font-family: Avanta Garde;
  display: flex;
  justify-content: center;
`
const Heading = styled.p`
  margin: 0px;
`