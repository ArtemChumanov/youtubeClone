import React from 'react';
import {Grid} from 'semantic-ui-react'
import BodyLeft from './BodyLeft'
import './BodyYT.scss'

function BodyYT() {
    return (
      <Grid.Row className='sidebar-white'>
        <Grid.Column width={2} >
            <BodyLeft />
        </Grid.Column>  
        <Grid.Column color='green' width={14}>
        222
        </Grid.Column>  
      </Grid.Row>
    );
  }
  
  export default BodyYT;