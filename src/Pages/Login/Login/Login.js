import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,signInUsingGithub,handleSignIn,handlePassword,handleEmail,error} = useAuth();
  
    return (
        <div>
            <div>
                <form onSubmit={handleSignIn}>
                    <h2 className="text-bold ">Please Login</h2>
                    <br />
                    <input onBlur={handleEmail} type="email" placeholder="your email" />
                    <br />
                    <input onBlur={handlePassword} className="mt-3" type="password" placeholder="your password" />
                    <br />
                    <input  className="mt-2" type="submit" value="submit" />
                    <div className="text-danger">{error}</div>
                </form>
            </div>
      
   
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-warning mx-3">Google Sign In</button>
            <button onClick={signInUsingGithub} className="btn btn-warning">GitHub Login</button>

        </div>
    );
};

export default Login;