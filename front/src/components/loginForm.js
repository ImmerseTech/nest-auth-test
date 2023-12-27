import {useState} from 'react'
import './styles.css'
import { login } from '../services/authService'

export const LoginForm = ({ setIsLogin, setIsUser }) => {
    const [username, setUsername] = useState()
    const [password,setPassword] = useState()

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit = async () => {
        const data = await login({username, password})

        if(data) {
            await localStorage.setItem('name', data.user.name)
            await localStorage.setItem('token', data.token)
            setIsUser()
        }
    }

    return(
        <div>
            <div className="form-body">
                <input 
                    className="form__input" 
                    type="text" id="username" 
                    placeholder="Username"
                    value={username}
                    onChange = {(e) => handleInputChange(e)}
                />
                <input 
                    className="form__input" 
                    type="password" id="password" 
                    placeholder="Password"
                    value={password}
                    onChange = {(e) => handleInputChange(e)}
                />
            </div>
            <div className="footer">
              <button 
              type="submit" 
              className="btn"
              onClick={()=>handleSubmit()}
              >
                Log In
              </button>
              <p>You don`t have account? <span className="link" onClick={()=>setIsLogin(false)}> Register</span></p>
            </div>
        </div>
        
    )
}