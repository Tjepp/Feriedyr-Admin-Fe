import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Menu } from 'grommet-icons';
import PropTypes from 'prop-types';

const AppBar = ({ onClick }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '100' }}
  >
    <Heading level="3" margin="none">
      My App
    </Heading>
    <Button icon={<Menu />} onClick={onClick} />
  </Box>
);

AppBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AppBar;
