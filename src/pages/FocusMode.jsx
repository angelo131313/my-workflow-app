import React, { useState, useEffect } from 'react';
import { Container, Button, Typography } from '@mui/material';
import { notify } from '../utils/notify';

function FocusMode() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      notify("Focus Session Complete!", { body: "Time for a break." });
      alert("Focus session complete! Take a break.");
      setTimeLeft(5 * 60); // Reset for a 5-minute break
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  return (
    <Container>
      <Typography variant="h4">Focus Mode</Typography>
      <Typography variant="h2">{formatTime(timeLeft)}</Typography>
      <Button variant="contained" color="primary" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button 
        variant="contained" 
        sx={{ marginLeft: 1 }} 
        onClick={() => { 
          setTimeLeft(25 * 60); 
          setIsRunning(false); 
        }}
      >
        Reset
      </Button>
    </Container>
  );
}

export default FocusMode;