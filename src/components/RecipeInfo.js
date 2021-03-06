import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import unfavouritedIcon from "./../assets/unfavourited-icon-50px.png";
import FlagIcon from "./../assets/flag_icon.png";
import RateRecipe from "./rateRecipe";
import "./../styles/RecipeInfo.css";
import { Link } from "react-router-dom";
import DeleteButton from "./deleteRecipe";

class RecipeInfo extends Component {
  // state = { recipe: [] };

  // componentDidUpdate() {
  //     if (this.state.recipe !== this.props.recipe){
  //         this.setState({ recipe: this.props.recipe })
  //     }
  // }

  render() {
    // let { recipe } = this.state;
    let { recipe } = this.props;

    return (
      <>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title className="Recipe-Info-Title">
              {recipe.title}
            </Card.Title>
            <Container>
              <Row bsPrefix="custom-comment-row">
                <Col xs={4} md={4}>
                  <img src={unfavouritedIcon} alt="empty heart" onClick={() => alert("Favourites coming soon")} />
                </Col>
                <Col xs={4} md={4}>
                  <RateRecipe recipe={recipe} {...this.props} />
                </Col>
                <Col xs={4} md={4}>
                  <Link to={`/FlagRecipePage/${recipe._id}`}>
                    <img
                      id="flagIcon"
                      src={FlagIcon}
                      alt="flag icon"
                      {...this.props}
                    />
                  </Link>
                </Col>
              </Row>
              <Row>
                <DeleteButton recipe={recipe} {...this.props} />
              </Row>
            </Container>
          </Card.Body>
          <Card.Header as="h4">Your ingredients:</Card.Header>
          <Card.Body>
            <Container>
              <Row bsPrefix="custom-comment-row">
                <Col xs={6}>
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient, index) => {
                      return <Card.Text key={index}>{ingredient}</Card.Text>;
                    })}
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default RecipeInfo;
