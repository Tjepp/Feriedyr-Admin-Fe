import React, { Component } from 'react';
import { Button } from 'grommet';
import Page from '../Components/Page';

class Home extends Component {
  state = {
    showSidebar: false
  };

  onClick = () => {
    const { showSidebar } = this.state;

    this.setState({ showSidebar: !showSidebar });
  };

  render() {
    return (
      <Page>
        <Button>Hello Home</Button>
      </Page>
    );
  }
}

export default Home;
