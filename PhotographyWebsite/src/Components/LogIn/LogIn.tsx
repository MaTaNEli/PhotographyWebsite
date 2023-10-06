import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {LogServer} from '../../ApiLinks/ApiLink';

import '../../Form/Form.css'
import axios, { AxiosError } from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigate('/');
 },[navigate])

  const submit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {username, password};

    try {
      const response = await LogServer.post('/login', user);

      if (response.status == 200)
        window.location.reload();
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data;
        if (typeof responseData === 'string') {
          setError(responseData);
        } else {
          setError('An unknown error occurred in.');
        }
      }
    }
  };

  const inputFields = useMemo(() => ([
    {
      type: 'text',
      placeholder: 'Email or username',
      onChange: setUsername
    },
    {
      type: 'password',
      placeholder: 'Password',
      onChange: setPassword
    }
  ]),[]);
  
  return (<div>
    <div  className="navbar"> 
      <h1> Log In </h1>
    </div> 
    <form id="test" className="myForm" onSubmit={submit}>
      {inputFields.map(input => (
        <div key={input.placeholder}>
          <input  type={input.type} placeholder={input.placeholder}
                  required
                  onChange={e => input.onChange(e.target.value)}/>
        </div>
      ))}
      {errorMessage ? <h5>{errorMessage}</h5> : null}
      <div>
        <button type="submit" disabled={!username || !password} >Log In</button>
      </div>
      <h3 color="#4D47C3" className="mt-4">Don't have an account ? 
                <Link style={{textDecoration: 'none'}} to="/register">Sign Up</Link></h3>
    </form>
  </div>)
}

export default LogIn;