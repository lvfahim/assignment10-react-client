import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Register = () => {
    const { Register, UpData, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const heandleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value
        Register(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                UpData({ displayName: name, photoURL: photo })
                    .then(() => {
                        // Profile updated!
                        // ...
                        setUser({ ...user, displayName: name, photoURL: photo })
                        e.target.reset();
                        Swal.fire({
                            title: "Register SusseccFully",
                            icon: "success",
                            draggable: true
                        });
                        navigate(`${location.state ? location.state : '/'}`)

                    }).catch((error) => {
                        // An error occurred
                        // ...
                        alert(error)
                    });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorCode);
                toast(errorMessage)
                // ..
            });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={heandleForm}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name='name' required />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name='email' required />
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" name='photo' required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name='password' required />
                            <button className="btn text-xl btn-primary-gradient  mt-4">Register Now</button>
                        </fieldset>
                    </form>
                    <div className='flex items-center'>
                        <p>.....................................</p>
                        <p className='text-2xl'>OR</p>
                        <p>....................................</p>
                    </div>
                    <button className='btn btn-primary-gradient'><FcGoogle /> Login In With Google</button>
                    <h2>Don't have an account? <Link className='text-blue-500 underline' to='/auth/login'>Login Now</Link></h2>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;