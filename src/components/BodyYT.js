import React from 'react';
import {Grid} from 'semantic-ui-react'
import BodyLeft from './BodyLeft'

function BodyYT() {
    return (
      <Grid.Row>
        <Grid.Column width={2} color='red'>
            <BodyLeft />
        </Grid.Column>  
        <Grid.Column color='green' width={14}>
        222
        </Grid.Column>  
      </Grid.Row>
    );
  }
  
  export default BodyYT;