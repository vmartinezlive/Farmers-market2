import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewLocationForm from './NewLocationForm';
import PropTypes from 'prop-types';

class NewLocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      exampleDay: ' ',
      exampleLocation: ' ',
      exampleHours: ' '

    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);


  }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewLocationForm onNewLocationCreation={this.props.onNewLocationCreation} />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onFormSubmission={this.handleFormSubmission}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewLocationControl.propTypes = {
  onNewLocationCreation: ProTypes.func
};



export default NewLocationControl;
