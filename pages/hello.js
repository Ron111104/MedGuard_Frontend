import React, { useEffect, useState } from 'react';

const HelloPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello'); // Adjusted to match Next.js API route
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Data from Backend</h1>
      {error ? (
        <div style={styles.error}>Error: {error}</div>
      ) : !data ? (
        <div style={styles.loading}>Loading...</div>
      ) : (
        <pre style={styles.data}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    color: '#333',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  error: {
    color: '#e74c3c',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  loading: {
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  data: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
  },
};

export default HelloPage;
