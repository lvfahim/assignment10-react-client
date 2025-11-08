import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { Login, Google } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const heandleFormGoogle = () => {
        Google()
            .then(result => {
                console.log(result)
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                console.log(error)
                toast('Google login failed. Please try again.')
            })
    }
    const heandleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        Login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(`${location.state ? location.state : '/'}`)
                // ...
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast('Please enter both email and password.')
                    return;
                }
                else if (error.massage === 'auth/weak-password') {
                    toast('Please enter both email and password.')
                    return;
                }
            });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={heandleForm}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn text-xl btn-primary-gradient  mt-4">Login Now</button>
                        </fieldset>
                    </form>
                    <div className='flex items-center'>
                        <p>.....................................</p>
                        <p className='text-2xl'>OR</p>
                        <p>....................................</p>
                    </div>
                    <button onClick={heandleFormGoogle} className='btn btn-primary-gradient'><FcGoogle /> Login In With Google</button>
                    <h2>Don't have an account? <Link className='text-blue-500 underline' to='/auth/register'>Register Now</Link></h2>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;