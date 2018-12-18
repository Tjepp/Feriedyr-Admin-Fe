import React, { Component } from 'react';
import { Grommet, Button, Box, Collapsible, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';
import Appbar from './Components/AppBar';
import theme from './theme';

class App extends Component {
  state = {
    showSidebar: false
  };

  onClick = () => {
    const { showSidebar } = this.state;

    this.setState({ showSidebar: !showSidebar });
  };

  render() {
    const { showSidebar } = this.state;

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <Appbar onClick={this.onClick} />
              <Box direction="row" flex>
                <Box flex align="center" justify="center">
                  app body
                </Box>
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
                      sidebar
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
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
