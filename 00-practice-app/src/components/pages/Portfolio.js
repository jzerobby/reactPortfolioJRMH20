import React from 'react';
import codeQuiz from '../images/CodeQuiz.png';
import horiseon from '../images/Horiseon.png';
import myPortfolio from '../images/MyPortfolio.png';
import workSched from '../images/workSched.png';
import pwGen from '../images/pwGen.png';
import animalLovers from '../images/animalLovers.png';

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
    color: '#6E6E6E',
  },
  image: {
    margin: '20px',
    width: '95%',
    display: 'block',
  }
};

export default function Portfolio() {
  return (
    <div>
      <h1 style={styles.card} >Portfolio</h1>
      <figure style={styles.position}>
        <h1>1. My Portfolio</h1>
        <a href="https://jzerobby.github.io/MyPortfolioJRMH2/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={myPortfolio} alt="Logo" />
          Application link
        </a> &ensp;
        <a href="https://github.com/jzerobby/MyPortfolioJRMH2"
          target="_blank"
          rel="noreferrer">
          Repository link
        </a>
      </figure>

      <figure style={styles.position}>         
          <h1>2. Horiseon</h1>
          <a href="https://jzerobby.github.io/HoriseonJRMH1/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={horiseon} alt="Logo" />
          Application link
        </a> &ensp;
        <a href="https://github.com/jzerobby/HoriseonJRMH1"
          target="_blank"
          rel="noreferrer">
          Repository link
        </a>
      </figure>  

      <figure style={styles.position}> 
          <h1>3. Code Quiz</h1>
          <a href="https://jzerobby.github.io/CodeQuizJRMH4/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={codeQuiz} alt="Logo" />
          Application link
        </a> &ensp;
        <a href="https://github.com/jzerobby/CodeQuizJRMH4"
          target="_blank"
          rel="noreferrer">
          Repository link
        </a>
      </figure>

      <figure style={styles.position}> 
          <h1>4. Work Day's Hourly Events</h1>
          <a href="https://jzerobby.github.io/WorkSchedJRMH5/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={workSched} alt="Logo" />
          Application link
        </a> &ensp;
        <a href="https://github.com/jzerobby/WorkSchedJRMH5"
          target="_blank"
          rel="noreferrer">
          Repository link
        </a>
      </figure>

      <figure style={styles.position}> 
          <h1>5. Password Generator</h1>
          <a href="https://jzerobby.github.io/PWGenJRMH3/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={pwGen} alt="Logo" />
          Application link
        </a> &ensp;
        <a href="https://github.com/jzerobby/PWGenJRMH3"
          target="_blank"
          rel="noreferrer">
          Repository link
        </a>
      </figure>

      <figure style={styles.position}> 
          <h1>6. Animal Lovers Project</h1>
          <a href="https://rdiego56.github.io/Animal-Lovers/"
          target="_blank"
          rel="noreferrer">
          <img style={styles.image} src={animalLovers} alt="Logo" />
          Application link
        </a> &ensp;
        <a href="https://github.com/rdiego56/Animal-Lovers/tree/jzero-branch"
          target="_blank"
          rel="noreferrer">
          Repository link
        </a>
      </figure>
    </div>
  );
}
