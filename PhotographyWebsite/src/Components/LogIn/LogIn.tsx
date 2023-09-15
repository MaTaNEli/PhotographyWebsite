import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Form/Form.css'

const LogIn = () => {
  const navigate = useNavigate();
  //const [errorMessage, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigate('/');
 },[navigate])

  const submit = async e => {
    e.preventDefault();
    const user = {username, password};

    try {
      const response = await axios.post('login', user);
      console.log(response.data);

      window.location.reload();
      
    } catch (error) {
        //setError(error.response?.data.error);
        console.log(error);
    }

  };

  const inputFields = useMemo(() => (
    [
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
    ]
  ),[]);
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
      <div>
        <button type="submit" disabled={!username || !password} >Log In</button>
      </div>
      <h4 color="#4D47C3" className="mt-4">Don't have an account ? 
                <Link style={{textDecoration: 'none'}} to="/register">Sign Up</Link></h4>
    </form>
  </div>)
}

export default LogIn;