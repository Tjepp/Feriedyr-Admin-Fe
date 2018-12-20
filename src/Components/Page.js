import React, { Component } from 'react';
import { Grommet, Button, Box, Collapsible, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import theme from '../theme';

class Page extends Component {
  state = {
    showSidebar: false
  };

  onClick = () => {
    const { showSidebar } = this.state;

    this.setState({ showSidebar: !showSidebar });
  };

  render() {
    const { showSidebar } = this.state;
    const { children } = this.props;

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <TopAppBar onClick={this.onClick} />
              <Box direction="row" flex>
                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      <Link to="/">Home</Link>
                      <Link to="/createcourse/"> CreateCourse </Link>
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button icon={<FormClose />} onClick={this.onClick} />
                    </Box>
                    <Box fill background="light-2" align="center" justify="center">
                      sidebar
                    </Box>
                  </Layer>
                )}
                <Box flex align="center" justify="center">
                  {children}
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
