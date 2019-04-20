import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys = () =>
    this.props.surveys.map(survey => (
      <div key={survey._id} className="card darken-1">
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent on: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      </div>
    ));

  render() {
    return (
      <div>
        <h3>SurveyList</h3>
        {this.renderSurveys()}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
});

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
