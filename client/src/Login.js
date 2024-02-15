import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // axios.get('http://localhost:5000/users');

    axios.post('http://localhost:5000/users', { username, password })
    .then(response => {
      if (response.data.success) {
        console.log('認証成功:', response.data);
      } else {
        console.log('認証失敗:', response.data);
      }
    })
    .catch(error => console.error('Error:', error));
    
    
    // ログインが成功したらユーザーを次のページにリダイレクト;
    // if (username.length > 0 && password.length > 0) {
    //   let user;
    //   // 毎回全ユーザーを取得するのは非効率
    //   fetch("http://localhost:5000/users")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       user = data.find((user) => user.username === username);
    //       if (username.length > 0 && password.length > 0) {
    //         if (password === user.password) {
    //           console.log("to nextpage");
    //         } else {
    //           console.log("Invalid username or password");
    //         }
    //       } else {
    //         console.log("Invalid username or password");
    //       }
    //     })
    //     .catch((error) => console.error("Error:", error));
    // } else {
    //   console.log("Invalid username or password");
    // }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="submit-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
