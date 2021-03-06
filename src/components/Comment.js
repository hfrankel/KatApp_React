import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import "./../styles/Comment.css";
import healthyRecipesApp from "./../api/healthyRecipesApp";
import withAuth0Props from "./withAuth0Props";

class Comment extends Component {
  state = {
    comments: [],
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    let { id } = this.props.match.params;

    const response = await healthyRecipesApp({
      method: "post",
      url: `/recipes/${id}/comment`,
      data: {
        body: this.state.body
      }
    }).catch(err => console.log(err));
    this.props.addComment(response.data);
  };

  render() {
    let { comments, isAuthenticated } = this.props;

    return (
      <>
        <Card style={{ margin: "10px" }}>
          <Card.Header as="h4">Comments</Card.Header>
          <Card.Body>
            {isAuthenticated && (
              <form onSubmit={this.onFormSubmit}>
                <input
                  type="text"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Add" />
              </form>
            )}
            {comments &&
              comments.map(comment => {
                return (
                  <div key={Math.random(6) * 100}>
                    <Container key={Math.random(6) * 100}>
                      <Row
                        bsPrefix="custom-comment-row"
                        key={Math.random(6) * 100}
                      >
                        <Col xs={12} md={8}>
                          <Card.Title
                            as="h5"
                            key={comment.nickname}
                            className="Comment-Nickname-Title"
                          >
                            {comment.nickname}
                          </Card.Title>
                        </Col>
                        <Col xs={6} md={4} key={Math.random(6) * 100}>
                          <Card.Title
                            as="h6"
                            key={comment.dateOfComment}
                            className="Comment-Date"
                          >
                            {comment.dateOfComment.slice(0, 10)}
                          </Card.Title>
                        </Col>
                      </Row>
                    </Container>

                    <Card.Text key={comment.body}>{comment.body}</Card.Text>
                    <hr></hr>
                  </div>
                );
              })}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withAuth0Props(Comment);
