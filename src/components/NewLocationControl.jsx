import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewLocationForm from './NewLocationForm';
import PropTypes from 'prop-types';

class NewLocationControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,

    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);


  }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewLocationForm onNewLocationCreation={this.props.onAddingNewLocationForm} />;
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
  onNewLocationCreation: PropTypes.func
};



export default NewLocationControl;
