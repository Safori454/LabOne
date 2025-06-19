import React, { useState } from 'react';

interface AuthFormProps {
  isLogin: boolean;
}

function AuthForm({ isLogin }: AuthFormProps) {
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto', background: '#fff', borderRadius: 10 }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <input placeholder="Username" style={{ display: 'block', marginBottom: 10, width: '100%', padding: '8px' }} />
      <input placeholder="Password" type="password" style={{ display: 'block', marginBottom: 10, width: '100%', padding: '8px' }} />
      <button style={{ padding: '8px 16px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '4px' }}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}

function App() {
  const [loginMode, setLoginMode] = useState(true);

  return (
    <div style={{ background: '#eee', height: '100vh', paddingTop: 100 }}>
      <AuthForm isLogin={loginMode} />
      <p style={{ textAlign: 'center' }}>
        {loginMode ? "No account?" : "Already have an account?"}
        <button
          onClick={() => setLoginMode(!loginMode)}
          style={{ marginLeft: 8, padding: '4px 8px', background: 'transparent', border: '1px solid #2c3e50', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default App;
