import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      <h1>About Us</h1>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide excellent service and build a strong community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                To be a leader in our industry and inspire others to reach their goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
