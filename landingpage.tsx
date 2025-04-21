import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const openModal = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const login = () => {
    if (username && password) {
      setLoggedInUser(username);
      closeModal();
    } else {
      alert('Please enter both fields.');
    }
  };

  return (
    <>
      <Head>
        <title>QuickNotes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.globe}></div>

      <header className={styles.header}>
        <Image src="/logo.png" alt="QuickNotes Logo" width={50} height={50} />
        <h1>QuickNotes</h1>
      </header>

      <main className={styles.container}>
        {!loggedInUser ? (
          <>
            <h2>Take Notes, Fast & Secure</h2>
            <p>
              QuickNotes is your futuristic notepad with seamless access, secure storage, and
              lightning-fast interaction.
            </p>
            <div className={styles.buttons}>
              <button className={styles.login} onClick={() => openModal('Login')}>
                Login
              </button>
              <button className={styles.signup} onClick={() => openModal('Sign Up')}>
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Welcome, {loggedInUser}!</h2>
            <p>Your notes await...</p>
          </>
        )}
      </main>

      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <h3>{modalTitle}</h3>
            <input
              type="text"
              placeholder="Email or Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Continue</button>
            <br />
            <button className={styles.closeBtn} onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
