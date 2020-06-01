import React from 'react';
import 'semantic-ui-react'
import { Grid } from 'semantic-ui-react';
import HeaderYT from './components/HeaderYT';
import BodyYT from './components/BodyYT';

function App() {
  return (
    <div >
      <Grid padded >
        <HeaderYT  />
        <BodyYT  />
      </Grid>
    </div>
  );
}

export default App;
