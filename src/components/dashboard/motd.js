import styled from 'styled-components';
import React, { Component }  from 'react';

const MOTDContainerStyle = styled.div`

`;

class MOTD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    try {
    fetch('https://aphorismcookie.herokuapp.com/')
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          items: JSON.parse(result)
        });
      }, (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<MOTDContainerStyle>{items.data.message}</MOTDContainerStyle>);
    }
  }
}

export default MOTD
