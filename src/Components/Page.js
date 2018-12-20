import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import PropTypes from 'prop-types';
import TopAppBar from './TopAppBar';
import theme from '../theme';
import SideBar from './SideBar';

class Page extends Component {
  state = {
    showSidebar: false
  };

  toggleShowSideBar = () => {
    const { showSidebar } = this.state;
    this.setState({ showSidebar: !showSidebar });
  };

  render() {
    const { showSidebar } = this.state;
    const { children } = this.props;

    return (
      <Grommet theme={theme} full flex>
        <Box flex fill direction="column">
          <TopAppBar toggleShowSideBar={this.toggleShowSideBar} />
          <Box fill direction="row">
            <SideBar showSidebar={showSidebar} toggleShowSideBar={this.toggleShowSideBar} />
            <Box fill flex align="center" justify="center">
              {children}
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
