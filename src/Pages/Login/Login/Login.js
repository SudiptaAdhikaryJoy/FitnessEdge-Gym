import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,signInUsingGithub,handleSignIn,handlePassword,handleEmail,error} = useAuth();
  
    return (
        <div className="rounded-3 shadow-lg  w-8/12 mx-auto py-16 border-0 mt-4 ">
            <div className="w-6/12">
                <form onSubmit={handleSignIn} className="border-2 w-100 h-auto mx-auto pb-10 rounded-3 shadow">
                    <h2 className="text-bold ">Please Login</h2>
                    <br />
                    <input className="p-1 w-80 border-primary border-2" onBlur={handleEmail} type="email" placeholder="your email" />
                    <br />
                    <input className="p-1 w-80 border-primary border-2 mt-2"  onBlur={handlePassword}  type="password" placeholder="your password" />
                    <br />
                    <input  className="p-1 w-80 border-primary border-2 mt-2 hover" type="submit" value="submit" />
                    <div className="text-danger">{error}</div>
                </form>
                <br />
                <div><input type="checkbox" name="" id="" /> Already Register?</div>
            </div>
      
             <div>--------------------or-------------------</div>
            <br /> 
            <button onClick={signInUsingGoogle} className="btn btn-warning mx-3">Google Sign In</button>
            <button onClick={signInUsingGithub} className="btn btn-warning">GitHub Login</button>

        </div>
    );
};

export default Login;