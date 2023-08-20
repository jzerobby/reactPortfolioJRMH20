import React from 'react';
import resume from '../images/resume23.png';

const styles = {
  card: {
    margin: 20,
    background: '#6E6E6E',
    padding: '10px',
    color: '#BAFF39',
  },
  position: {
    margin: '50px',
    width: '90%',
    background: '#BAFF39',
    padding: '10px',
    display: 'block',
  },
};

export default function Resume() {
  return (
    <div>
      <h1 style= {styles.card} >Resume</h1>
      <img style= {styles.position} src={resume} alt="Logo" />
    </div>
  );
}
