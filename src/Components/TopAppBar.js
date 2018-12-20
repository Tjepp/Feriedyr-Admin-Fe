import React from 'react';
import { Box, Button } from 'grommet';
import { Menu } from 'grommet-icons';
import PropTypes from 'prop-types';

const TopAppBar = ({ toggleShowSideBar }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    height="48px"
    fill="horizontal"
  >
    <Button icon={<Menu />} onClick={toggleShowSideBar} />
  </Box>
);

TopAppBar.propTypes = {
  toggleShowSideBar: PropTypes.func.isRequired
};

export default TopAppBar;
