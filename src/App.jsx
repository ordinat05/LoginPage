import React, { useState } from 'react'
import Input from './components/input/Input.jsx'
import Button from './components/button/Button.jsx'
import Form from './components/form/Form.jsx'
import './App.css'

function App() {

  const [user, setUser] = useState({ name: "", password: "" })
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user)
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
      console.log(user)
    }
  };
  const handleClick = () => {
    if (user.name === "") {
      alert("Kullanıcı Adı Boş Geçilemez");
    } else if (user.password === "") {
      alert("Şifre Boş Geçilemez");
    } else {
      alert("Kullanıcı Adı: " + user.name + " , " + "Şifreniz: " + user.password);
    }
  }

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <h2>Giriş Formu</h2>
      <Form >
        <Input
          type={"text"}
          value={user.name}
          placeholder={"Kullanıcı Adı"}
          onChange={handleChange}
        />

        <Input type={"password"} value={user.password} placeholder={"Şifre"} onChange={handleChange} />
        <Button onClick={handleClick} />
      </Form>
    </div>
  )
}

export default App