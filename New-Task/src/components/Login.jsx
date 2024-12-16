import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {
    const [data, setData] = useState({
        username : '',
        password :''
    })
    const Navigate = useNavigate();
    let handleChange = (e) =>{
        const {name , value} = e.target;
        setData({...data,[name]:value})
        console.log(data)
    }
    let handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let dataset = await axios.get("https://6756884111ce847c992d12fc.mockapi.io/api/v1/user");
            let newData = null;
            for (let i of dataset.data){
                if(data.email == i.email && i.password == data.password){
                    newData = i;
                    alert('login success')
                    localStorage.setItem('token' , '9rjdf894jfu')
                    localStorage.setItem('username', newData.username)
                    Navigate('/dashboard')
                    window.location.reload()
                    break
                }
            }
            if(newData == null){
                alert("Login Failed Please Try Again");
            }
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <>
      <form className='container' onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="username" class="form-label">Email</label>
                <input type="email" name='email' onChange={handleChange} class="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name='password' onChange={handleChange} class="form-control" id="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </>
  )
}

export default Login
