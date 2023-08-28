import React from 'react';

export default function Signup() {
    
    const [formData, setFormData] = React.useState({email: "", password: ""})
    
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(preVal => ({
            ...preVal,
            [name]: value
        }))
    }
    
    
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
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
                <button>Sign Up</button>
            </form>
        </div>
    )
};