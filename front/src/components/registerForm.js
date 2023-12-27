import {useState} from 'react'
import './styles.css'
import { register } from '../services/authService'

export const RegisterForm = ({setIsLogin}) => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password,setPassword] = useState('')

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "username"){
            setUsername(value);
        }
        if(id === "name"){
            setName(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit = async () => {
        await register({name, username, password})
        setIsLogin(true)
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
                    type="text" id="name" 
                    placeholder="Name"
                    value={name}
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
                Register
              </button>
              <p>Do you have account? <span className="link" onClick={()=>setIsLogin(true)}> Log In</span></p>
            </div>
        </div>
        
    )
}