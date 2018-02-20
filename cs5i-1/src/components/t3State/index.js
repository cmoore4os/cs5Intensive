import React, { Component } from 'react';
import SocialTags from './SocialTags';
import { Grid } from 'semantic-ui-react';

// example of a stateless class component
class T3State extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Grid.Row> Test wil go here</Grid.Row>
        <Grid.Row>
          <SocialTags likes={27} retweets={10} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default T3State;
