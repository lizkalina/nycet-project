import React from 'react';
import MapContainer from './components/MapContainer.jsx';
import DataMap from './components/Map.jsx';
//import MapTooltip from './components/MapTooltip.jsx';
import TopTen from './components/TopTen.jsx';
import { Grid, Header, Card, Container } from 'semantic-ui-react';
import './App.css';

//TODO: make smarter -- get props from url and pass to map/other things
const Competitiveness = () => (
      <div className="App">
        <Container>
          <div className='page-header'>
            <Header>
              <h1>New York City Competitiveness - Assembly District Overview</h1>
            </Header>
          </div>
          <Grid>
            <Grid.Column width={10} style={{ minHeight: 600 }}>
              <MapContainer>
                <DataMap />
              </MapContainer>
            </Grid.Column>
            <Grid.Column width={5}>
              <Card>
                <TopTen />
              </Card>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
);

export default Competitiveness;
