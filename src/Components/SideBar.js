import React, { Fragment } from 'react';
import { Button, Box, Collapsible, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBar = ({ showSidebar, toggleShowSideBar }) => (
  <Fragment>
    <ResponsiveContext.Consumer>
      {size => (
        <Box>
          <Box direction="row" flex fill>
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
                <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                  <Button icon={<FormClose />} onClick={toggleShowSideBar} />
                </Box>
                <Box fill background="light-2" align="center" justify="center">
                  <Link to="/">Home</Link>
                  <Link to="/createcourse/"> CreateCourse </Link>
                </Box>
              </Layer>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Fragment>
);

SideBar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  toggleShowSideBar: PropTypes.func.isRequired
};

export default SideBar;
