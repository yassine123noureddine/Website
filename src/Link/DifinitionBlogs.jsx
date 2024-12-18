import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import posts from "./posts.json"
function DifinitionBlog() {
    const {id}=useParams()
    const post = posts.find(item => item.id === parseInt(id));
    console.log(post)
    console.log(id)
    if(!post){
        return <div>post nit found</div>
    }
  return <>
  { post &&

<Container className="d-flex justify-content-center " style={{ height: 'auto',marginTop:"20px" }}>
    
<Card style={{ width: '70%' }} className="shadow-lg">
<Card.Body>
<Card.Img variant="top" src={post.image} alt={post.title} style={{height:"200px"}}/> 
    
  <Card.Title className='p-2'>{post.title}</Card.Title>
  <Card.Text>
      {post.description.en}
  </Card.Text>
  <Button variant="primary" ><a href="\blog" style={{color:"white", textDecoration: "none" }}>Go Blog</a></Button>
</Card.Body>
</Card>


</Container>

  }
  </>
}

export default DifinitionBlog;
// {
//     "id": 2,
//     "title": "Understanding JavaScript Closures",
//     "excerpt": "Closures are a fundamental concept in JavaScript. This post explores how closures work and how they can be used effectively in your code.",
//     "link": "/difinitionBlog/2",
//     "image": "https://via.placeholder.com/150?text=JavaScript",
//     "description": {
//       "en": "JavaScript closures are a powerful and often misunderstood concept. A closure is created when a function is declared within another function, allowing it to access variables from its parent scope even after the outer function has finished executing. Closures are useful for data encapsulation, maintaining state across function calls, and creating private variables. In this blog post, we’ll explore how closures work, examples of their use, and how you can apply them effectively in your own JavaScript code."
//     }