import React from 'react';
import { FaHome, FaDollarSign, FaRegHandshake, FaChartLine, FaGift, FaMobileAlt } from 'react-icons/fa'; // Importing relevant icons


function start() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>Better <span style={{ fontWeight: 'normal' }}>Mortgage</span></div>
        <div style={styles.contact}>
          <span >Need help? Call (415) 523-8837</span>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.greeting}>
        <h1>Hi, I&apos;m Betsy!</h1>

          <h2>What can I help you with?</h2>
        </div>

        <div style={styles.buttons}>
          <button style={styles.button}>
            <FaHome style={styles.icon} /> Buying a home
          </button>
          <button style={styles.button}>
            <FaRegHandshake style={styles.icon} /> Refinance my mortgage
          </button>
          <button style={styles.button}>
            <FaDollarSign style={styles.icon} /> Get cash from my home
          </button>
        </div>

        <div style={styles.stats}>
          <div>
            <h2>$100B</h2>
            <p>home loans funded entirely online</p>
          </div>
          <div>
            <h2>400K</h2>
            <p>Customers who chose a Better Mortgage</p>
          </div>
        </div>

        <div style={styles.infoBox}>
        <p>After a few questions, you&apos;ll unlock:</p>

          <ul style={styles.list}>
            <li style={styles.listItem}><FaChartLine style={styles.listIcon} /> Custom mortgage rates</li>
            <li style={styles.listItem}><FaGift style={styles.listIcon} /> Exclusive offers</li>
            <li style={styles.listItem}><FaMobileAlt style={styles.listIcon} /> A personalized dashboard</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ccc'
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#006b4b',
   
  },
  contact: {
    fontSize: '14px',
    color: '#333'
  },
  main: {
    padding: '20px 0'
  },
  greeting: {
    marginBottom: '20px'
  },
  buttons: {
    display: 'grid',
    gap: '10px',
    marginBottom: '20px'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#006b4b',
    gap: '10px' // Space between icon and text
  },
  icon: {
    fontSize: '18px' // Adjust icon size as needed
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px'
  },
  infoBox: {
    backgroundColor: '#e7f4f1',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'left'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    marginBottom: '10px'
  },
  listIcon: {
    fontSize: '18px',
    color: '#006b4b'
  }
};

export default start;
