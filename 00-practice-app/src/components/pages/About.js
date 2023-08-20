import React from 'react';
import profilePic from '../images/profilePic.jpg';

const styles = {
  card: {
    margin: 20,
    background: '#6E6E6E',
    padding: '10px',
    color: '#BAFF39',
  },
  position: {
    margin: '20px',
    width: '90%',
    background: '#BAFF39',
    padding: '20px',
    display: 'block',
  },
  image: {
    margin: '20px',
    width: '10%',
    borderRadius: 400/ 2,
  }
};

export default function About() {
  return (
    <div>
      <h1 style={styles.card} >About</h1>
      <img style={styles.image} src={profilePic} alt="Logo" />
      <p style={styles.position}>I don't know anything about coding until I join this bootcamp. I'll say that it is a bit challenging but also amazing. I'll never forget this experience for the rest of my life. One thing I learn about is Lorem Ipsum. </p>
      <p style={styles.position}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p style={styles.position}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
      <p style={styles.position}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. A Latin professor at Hampden-Sydney College in Virginia discovered the source.</p>
      <p style={styles.position}>Lorem Ipsum comes from "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
    </div>
  );
}
