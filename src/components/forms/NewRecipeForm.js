import React, { Component } from "react";
import PropTypes from "prop-types"; // npm package: runtime type checking for React props and similar objects
// import 3 wizard screens
import WizardPageOne from "./../pages/WizardPageOne"; // recipe description
import WizardPageTwo from "./../pages/WizardPageTwo"; // recipe ingredients
import WizardPageThree from "./../pages/WizardPageThree"; // recipe steps
import { connect } from "react-redux"; // container connecting react and redux
import { FieldArray } from "redux-form";
import FieldArraysForm from "./../pages/FieldArrayForm";
import "./../../styles/recipeForm.css";
import KatAppApi from "./../../api/healthyRecipesApp";
import withAuth0Props from "./../withAuth0Props";

class NewRecipeForm extends Component {
  constructor(props) {
    // defines initial state of component
    super(props); // parent class constructor (unable to use this.state without super(props))
    this.nextPage = this.nextPage.bind(this); // .bind() creates a new function with "this"
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      // sets form on page 1
      page: 1
    };
  }

  nextPage() {
    this.setState(state => {
      return { page: state.page + 1 };
    }); // navigates forwards one page
    console.log("next page");
  }

  previousPage() {
    this.setState(state => {
      return { page: state.page - 1 };
    }); // navigates backwards one page
    console.log("previous page");
  }

  onSubmit = () => {
    let data = this.props.form.wizard.values;
    let { history } = this.props;
    // console.log(data);
    KatAppApi.post("/recipes", data)
      .then(history.push("/"))
      .catch(err => console.log(err));
  };

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <WizardPageOne onSubmit={this.nextPage} />}
        {page === 2 && (
          <FieldArraysForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardPageThree
            previousPage={this.previousPage}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { form: state.form };
};

NewRecipeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default withAuth0Props(connect(mapStateToProps, {})(NewRecipeForm));
