import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Form/Form.css'
import { LogServer } from "../../ApiLinks/ApiLink";
import axios, { AxiosError } from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setError] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullname] = useState('');

  const submit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = {email, username, fullName, password};

    try {
      const response = await LogServer.post('register', userDetails);
      console.log(response.data);
      navigate('/');
    } catch (error: unknown) {
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

  const inputFields = [
    {
      type: 'text',
      placeholder: 'Email',
      onChange: setEmail
    },
    {
      type: 'text',
      placeholder: 'Username',
      onChange: setUsername
    },
    {
      type: 'text',
      placeholder: 'Full name',
      onChange: setFullname
    },
    {
      type: 'password',
      placeholder: 'Password',
      onChange: setPassword
    }
  ];

  return (<div>
    <div  className="navbar"> 
      <h1> Log In </h1>
    </div> 
    <form id="test1" className="myForm" onSubmit={submit}>
      {inputFields.map(input => (
        <div key={input.placeholder}>
          <input  type={input.type} placeholder={input.placeholder}
                  required
                  onChange={e => input.onChange(e.target.value)}/>
        </div>
      ))}
      {errorMessage ? <h5>{errorMessage}</h5> : null}
      <div>
        <button type="submit" disabled={!username || !password} >Sing Up</button>
      </div>

      <h3 color="#4D47C3" className="mt-4">Have an account ?
        <Link style={{textDecoration: 'none'}} to="/"> Log In</Link></h3>
    </form>
  </div>)
}

export default LogIn;