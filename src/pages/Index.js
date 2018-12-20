import React, { Component } from 'react';
import { Button } from 'grommet';
import Page from '../Components/Page';

class Index extends Component {
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
        <Button>Hello Index</Button>
      </Page>
    );
  }
}

export default Index;
