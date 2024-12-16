import React, { useState } from 'react'
import axios from 'axios';
function Article() {
  const [data,setData] = useState({
    username : '',
    email : '',
    password : ''
  })

  function handleChange (e){
    const {name , value} = e.target;
    setData({...data , [name] : value})
    console.log(data)

  }
  let handlePasswordCheck = (e) =>{
    let value = e.target.value
    let button = document.getElementById("submitButton")
    let label = e.target.previousElementSibling;
    if ( value == data.password){
      console.log('password match')
      button.classList.remove('disabled')
      label.style.color = "Green"
    }
    else{
      button.classList.add('disabled')
      label.style.color = "red"
    }
  }
 async function handleSubmit (e) {
  e.preventDefault();

  try{
    const response = axios.post('https://6756884111ce847c992d12fc.mockapi.io/api/v1/user', data);
    console.log("response :", response.data)
    alert('Form Submitted SuccessFully')
    setData({username:'',email:'',password:''})
  }
  catch(error){
    console.error("Error Submitting :", error);
    alert('There was Some Error in submitting the form');
  }
 }

  return (
    <>
    <form className='container' onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleUsername" className='form-label'>Username</label>
      <input type="text" placeholder='Enter Username' onChange={handleChange} value={data.username} class="form-control" required name='username' id="exampleUsername" aria-describedby="usernameHelp" />
    </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" placeholder='Enter Email' onChange={handleChange} value={data.email} name='email' class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={handleChange} value={data.password} placeholder='Enter Password' name='password' class="form-control" required id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
    <input type="password" placeholder='Enter Confrim Password' onChange={handlePasswordCheck} class="form-control" required id="exampleInputPassword2" />
  </div>
  <button type="submit" id='submitButton' class="btn btn-primary disabled">Submit</button>
</form>
    </>
  )
}

export default Article
