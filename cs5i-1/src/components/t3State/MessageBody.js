import React from 'react';
import { Container, Grid, Image, List } from 'semantic-ui-react';
import LambdaLogo from '../../assets/images/lambdaLogo.png';

const MessageBody = props => {
  return (
    <Grid>
      <Grid.Column>
        <div>
          <Container fluid>
            <p>
              Announcing Lambda School Trials = the easiest way to try out the
              perfect software engineer
            </p>
            <List>
              <List.Item>Describe your role</List.Item>
              <List.Item>
                We'll arrange back-to-back interviews with ideal students
              </List.Item>
              <List.Item>
                Select and try them out at a flat rate. No payroll or paperwork
              </List.Item>
            </List>
            lambdaschool.com/trials
          </Container>
        </div>
      </Grid.Column>
    </Grid>
  );
};
