import React from 'react';
import { Box, Button } from 'grommet';
import { Menu } from 'grommet-icons';
import PropTypes from 'prop-types';

const TopAppBar = ({ onClick }) => (
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
    <Button icon={<Menu />} onClick={onClick} />
  </Box>
);

TopAppBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TopAppBar;
