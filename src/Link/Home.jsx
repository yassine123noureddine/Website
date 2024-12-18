import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="text-center mt-4">
      <h1>Welcome to Noureddin's Website</h1>
      <p>
        Discover more about us, get in touch, or sign up for exclusive content.
      </p>
      <Button variant="primary" href="/contact">
        Get Started
      </Button>
    </Container>
  );
}

export default Home;
