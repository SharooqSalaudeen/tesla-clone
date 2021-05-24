import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section title="Model S" image="model-s.jpg" />
      <Section title="Model Y" image="model-y.jpg" />
      <Section title="Model 3" image="model-3.jpg" />
      <Section title="Model X" image="model-x.jpg" />
      <Section
        title="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        des="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        image="accessories.jpg"
        leftBtnText="Shop Now"
        accessories="yes"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
