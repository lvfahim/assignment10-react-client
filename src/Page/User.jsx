import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import { FaEnvelope, FaUserCircle } from 'react-icons/fa';

const User = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className="min-h-screen flex justify-center items-center  from-green-50 to-green-100 py-10 px-4">
            <title>User</title>
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center transition-transform hover:scale-[1.02] duration-300">
                {user?.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-blue-500 shadow-md"
                    />
                ) : (
                    <FaUserCircle className="text-[150px] text-gray-400 mx-auto" />
                )}


                <h1 className="text-3xl font-bold mt-5 text-gray-800">
                    {user?.displayName || 'User Name None'}
                </h1>
                <p className="text-gray-600 mt-1 flex items-center justify-center gap-2">
                    <FaEnvelope className="text-blue-500" />
                    {user?.email || 'No email available'}
                </p>


                <Link to='/editUser'>
                    <button className="mt-6 btn  w-full hover:text-blue-500 transition-colors duration-300">
                        Edit Profile
                    </button>
                </Link>
            </div>
        </div>
    );

}
export default User;