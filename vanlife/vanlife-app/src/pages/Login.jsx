import React, {useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import {loginUser} from '../api'
import {LoginContext} from '../components/Layout'


export default function Login() {
    
    const [formData, setFormData] = React.useState({email: "", password: ""})
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = React.useState(null)
    const [status, setStatus] = React.useState("idle")
    
    
    const {setIsLoggedIn} = useContext(LoginContext)
    
    
    let from = location.state?.from || "/host";
    
    function handleSubmit(e){ 
        e.preventDefault()
         setStatus("submitting")
        
         loginUser(formData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                setIsLoggedIn(localStorage.getItem("loggedin"))
                navigate(from, {replace: true})
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(preVal => ({
            ...preVal,
            [name]: value
        }))
        setError(null)
    }
    
    
    return (
        <div className="login-container">
            
            {
            location.state?.message && <h3>{location.state.message}</h3> 
            }
            
            <h1>Sign in to your account</h1>
            
            {error?.message && <h3 className="error-msg">{error.message}</h3>}
            
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
                
                
            </form>
        </div>
    )
};