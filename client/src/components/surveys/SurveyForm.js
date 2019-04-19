import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h1>Survey Form</h1>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
