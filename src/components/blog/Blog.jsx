import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Blog = (props) => {
  return (
    <Container>
    <div className="container-lg mt-5 bg-blue">
      <h1 className="display-4 pb-5 text-center">Blogs</h1>
      <Row>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            index={index}
          />
        );
      })}
      </Row>
    </div>
    </Container>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  return (
    <Col md={6}>
    <Card>
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <img src={image} className="card-img" alt="..." /> */}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <Card.Title as="h5">{title}</Card.Title>
              
              <Card.Text>{description}</Card.Text>
              <Link to={`${process.env.PUBLIC_URL}blog/${index}`}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </Card>
    </Col>
  );
};

export { Blog, BlogBuilder };
