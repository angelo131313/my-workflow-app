import React from 'react';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();

  return (
    <Container>
      <h1>My Workflow App Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: 16 }}>
            <h2>Focus Mode</h2>
            <p>Work distraction-free using our Pomodoro timer.</p>
            <Button variant="contained" color="primary" onClick={() => history.push('/focus')}>
              Go to Focus Mode
            </Button>
          </Paper>
        </Grid>
        {/* Add additional feature cards as needed */}
      </Grid>
    </Container>
  );
}

export default Dashboard;
