import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "../../components/home/migration";
import Button from 'react-bootstrap/Button';

const Blog = (props) => {
  
  return (
    <Jumbotron id="blog">
    <Container>
      
    <div>
      <h1 className="display-4 pb-5 text-center">Blogs</h1>
      <Row>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            index={index}
            image={value.image}
            bloglink={value.bloglink}
          />
        );
      })}
      </Row>
    </div>  
    
    </Container>
    </Jumbotron>
  );
};

const BlogCard = ({ index, title, image, description , bloglink}) => {
  
  return (
    <Col md={6}>
    <Card>
    <div className="m-5">  
             
          <div className="col-8 col-lg-12">
            <img src={image} className="img-fluid" alt="..."/>
            <br/>
            <br/>
            <div className="">
              <Card.Title as="h5">{title}</Card.Title>
              
              <Card.Text>{description}</Card.Text>
              
              <Button variant="light"  href={bloglink} target="_blank">Read more...</Button>{' '}
            </div>
          </div>  
            
    </div>
    </Card>
    <br />
    </Col>
  );
};

export { Blog, BlogBuilder };
