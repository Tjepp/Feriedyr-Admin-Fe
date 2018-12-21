import React, { Component } from 'react';
import { Grid, FormField, Box, TextInput } from 'grommet';
import Page from '../Components/Page';

// Course         String dropdown?                 Required
// StartDate      Date picker?                     Required
// EndDate        Date picker?                     Required
// weeks          Auto calculate from dates        Required
// Day of week    From first start day or input?   Required
// Adress         string                           Required
// Time           Date                             Required
// Capacity       number                           Required
// Price          number                           Required
// One time fee   number                           Optional

class CreateCourse extends Component {
  state = {
    courseName: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { courseName } = this.state;

    return (
      <Page>
        <Grid
          fill
          columns={{
            count: 2,
            size: 'auto'
          }}
          gap="small"
        >
          <Box background="brand">Item 1</Box>
          <Box background="brand">Item 2</Box>
          <Box background="brand">Item 3</Box>
          <Box background="brand">Item 4</Box>
          <Box background="brand">Item 5</Box>
          <Box background="brand">{courseName}</Box>
          <FormField
            label="HOLDNAVN"
            htmlFor="text-input"
            error="Text to call attention to an issue with this field"
          >
            <TextInput
              id="course-input"
              name="courseName"
              placeholder="placeholder"
              value={courseName}
              onChange={this.handleInputChange}
            />
          </FormField>
        </Grid>
      </Page>
    );
  }
}

export default CreateCourse;
