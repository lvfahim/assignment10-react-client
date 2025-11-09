import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';


const EditUser = () => {
    const {user ,setUser, UpData}=useContext(AuthContext)
    const location=useLocation();
    const navigate =useNavigate()
    const heandleForm =(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        // console.log('cliked',name,photo,user)
        UpData({ displayName: name, photoURL: photo})
        .then(()=>{
            setUser({...user,displayName: name, photoURL: photo})
            toast('Your Edit Profile Successfully');
            navigate(`${location.state?location.state:'/myProfile'}`)
            e.target.reset();
        })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl text-center'>Edit Your Profile</h1>
                    <form onSubmit={heandleForm}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" name='name'/>
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" name='photo' />
                            <div className='flex justify-between'>
                                <button className="btn btn-neutral mt-4 w-1/2 bg-blue-500 border-none">Update Profile</button>
                                <Link to='/user'><button className="btn btn-neutral mt-4 w-[150px] px-4">Go Profile</button></Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
                 <ToastContainer />
            </div>
        </div>
    );
};

export default EditUser;