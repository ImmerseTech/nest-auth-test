import './App.css';
import { UserPage} from './components/userPage';
import { LoginForm } from './components/loginForm';
import { RegisterForm } from './components/registerForm';
import { useState } from 'react';

function App() {
  const [isToken, setIsToken] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const accessToken = localStorage.getItem('token')
  
  const changeToken = () => {
    setIsToken(true)
  }

  const logout = () => {
    setIsToken(false)
  }

  return (
    <div className="App">
      {(isToken || accessToken) 
      ? <UserPage setIsUser={logout}/>
      : isLogin 
        ? <LoginForm setIsLogin={setIsLogin} setIsUser={changeToken}/>
        : <RegisterForm setIsLogin={setIsLogin}/>
      }
    </div>
  );
}

export default App;
