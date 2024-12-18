import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import posts from "./posts.json"
function Blog() {


  return (
    <Container className="mt-4">
      <h1>Blog</h1>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={post.image} alt={post.title} style={{height:"200px"}}/> {/* Image added here */}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link to={post.link}>
                  <Button variant="primary">Continue Reading</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
