import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Form/Form.css'

const LogIn = () => {
  const navigate = useNavigate();
  //const [errorMessage, setError] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullname] = useState('');

  const submit = async e => {
    e.preventDefault();
    const userDetails = {email, username, fullName, password};

    try {
      const response = await axios.post('register', userDetails);
      console.log(response.data);
      navigate('/');
    } catch (error) {
        //setError(error.response?.data.error);
        console.log(error);
    }
  };

  const inputFields = useMemo(() => (
    [
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
    ] 
  ),[]);

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
      <div>
        <button type="submit" disabled={!username || !password} >Sing Up</button>
      </div>

      <h4 color="#4D47C3" className="mt-4">Have an account ?
        <Link style={{textDecoration: 'none'}} to="/"> Log In</Link></h4>
    </form>
  </div>)
}

export default LogIn;