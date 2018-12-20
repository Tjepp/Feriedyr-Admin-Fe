import React, { Component } from 'react';
import { Grommet, Button, Box, Collapsible, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';
import PropTypes from 'prop-types';
import Page from '../Components/Page';
import theme from '../theme';

class CreateCourse extends Component {
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
        <Button> Hello CreateCourse </Button>
      </Page>
    );
  }
}

export default CreateCourse;
