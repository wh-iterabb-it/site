import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const APIContainerStyle = styled.div`
`;

const Password = ({ password, generate }) => (
  <div>
    <p>password: {password}</p>
    <button onClick={generate}>Generate</button>
  </div>
)

Password.propTypes = {
  password: PropTypes.string.isRequired,
  generate: PropTypes.func.isRequired,
}

const mapStateToProps = ({ password }) => {
  return { password }
}

const mapDispatchToProps = dispatch => {
  return { generate: () => dispatch({ type: `GENERATE_PASSWORD` }) }
}

const ConnectedPassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(Password)

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <ConnectedPassword />
        {this.props.children}
      </div>
    )
  }
}

export default DefaultPassword
