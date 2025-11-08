import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const heandleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={heandleForm}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' required />
                            <button className="btn text-xl btn-primary-gradient  mt-4">Login Now</button>
                        </fieldset>
                    </form>
                    <h2>Don't have an account? <Link className='text-blue-500 underline' to='/auth/login'>Login Now</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Register;