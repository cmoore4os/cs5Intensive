import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class SocialTags extends Component {
  state = {};
  render() {
    return (
      <Grid container columns={4}>
        <Grid.Column>
          <Icon name="comment outline" />
        </Grid.Column>
        <Grid.Column>
          <Icon name="retweet" /> {this.props.retweets}
        </Grid.Column>
        <Grid.Column>
          <Icon name="heart outline" /> {this.props.likes}
        </Grid.Column>
        <Grid.Column>
          <Icon name="mail outline" />
        </Grid.Column>
      </Grid>
    );
  }
}
