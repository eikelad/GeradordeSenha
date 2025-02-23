import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <div className="generator-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
          alt="Senha"
          className="icon"
        />
        <h1>Gerador de Senha</h1>
        <p>Tamanho {length} caracteres</p>
        <input
          type="range"
          min="8"
          max="30"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="slider"
        />
        <button onClick={generatePassword} className="generate-btn">
          Gerar Senha
        </button>
        {password && (
          <div className="password-display">
            {password}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
