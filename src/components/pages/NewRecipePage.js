import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import NewRecipeForm from "./../forms/NewRecipeForm";
import axios from "axios";

// This page will be where all recipes are shown to the user or admin

class NewRecipe extends Component {
  state = { form: "" }; // empty form

  componentDidMount() {
    console.log("component mounted"); // runs when the component runs the first time on the screen "mounts"

    // axios
    //   .get("http://localhost:3001/recipes") // where is the data coming from?
    //   .then(response => this.setState({ form: response.form.wizard.values }))
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <Container id="RecipeList">
          <Row id="recipeRowTitle">
            <h1>New Recipe</h1>
          </Row>
          <Row id="recipeRow">
            <NewRecipeForm />
            <p>{this.state.form}</p>
          </Row>
        </Container>
      </>
    );
  }
}

export default NewRecipe;
