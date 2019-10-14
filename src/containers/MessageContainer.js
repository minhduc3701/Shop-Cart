import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "../components/Message";

class MessageContainer extends React.Component {
  render() {
    let { message } = this.props;
    return <Message message={message}></Message>;
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(
  //connect voi store
  mapStateToProps,
  null
)(MessageContainer);

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
};
