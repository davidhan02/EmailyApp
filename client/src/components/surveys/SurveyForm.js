import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h3>Survey Form</h3>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field name="surveyTitle" type="text" component="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
