import styled from 'styled-components';
import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const APIContainerStyle = styled.div`
  position: relative;
  text-align: center;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: auto;
    span {
      color: #eff6ee;
    }
  }
  a {
    text-decoration: none;
    color: #66cc66;
  }
`;

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: props.apiUrl,
      name: props.name,
      link: props.link,
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <APIContainerStyle>
          <ul>
            <li><span>{this.state.name} API</span></li>
            <li>Uptime: {items.uptime}</li>
            <li>Version: {items.version}</li>
            <li><a href='{this.state.link}'>[{this.state.name}@GITHUB]</a></li>
          </ul>
        </APIContainerStyle>
      );
    }
  }
}

API.propTypes = {
  apiUrl: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
}

API.defaultProps = {
  apiUrl: `https://meowfacts.herokuapp.com/health`,
  name: `API`,
  link: ``,
}

export default API
