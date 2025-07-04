import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setResult('');
    setError('');
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:8080/api/transcribe', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      let transcription = response.data;
      // If backend returns a JSON string, parse it
      if (typeof transcription === 'string') {
        try {
          const parsed = JSON.parse(transcription);
          transcription = parsed.text || transcription;
        } catch (e) {
          // Not a JSON string, use as is
        }
      } else if (typeof transcription === 'object' && transcription.text) {
        transcription = transcription.text;
      }
      setResult(transcription);
    } catch (err) {
      setError(err.response?.data || 'Error uploading file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0001' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Audio Transcription</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label style={{ fontWeight: 500 }}>
          Select audio file:
          <input type="file" accept="audio/*" onChange={handleFileChange} style={{ marginTop: 8 }} />
        </label>
        <button type="submit" disabled={loading || !file} style={{ padding: '10px 0', fontWeight: 600, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, cursor: loading || !file ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Transcribing...' : 'Transcribe'}
        </button>
      </form>
      {result && (
        <div style={{ marginTop: 32, background: '#f5f5f5', borderRadius: 8, padding: 20, border: '1px solid #e0e0e0' }}>
          <h4 style={{ marginBottom: 12 }}>Transcription Result:</h4>
          <pre style={{ fontSize: 18, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{result}</pre>
        </div>
      )}
      {error && (
        <div style={{ marginTop: 32, background: '#ffeaea', borderRadius: 8, padding: 16, border: '1px solid #ffbdbd', color: '#d32f2f', fontWeight: 500 }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default App;
