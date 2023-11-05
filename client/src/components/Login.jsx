import instaLogo from '../assets/images/insta_text_logo.png';
import playstore from '../assets/images/playstore.png'
import microsoftstore from '../assets/images/microsoftstore.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",

    })
    const [records, setRecords] = useState([]);

    const showToastError = (message) => {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        //[name] is dynamic data in below object
        setUserData({ ...userData, [name]: value })
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const submitForm = (e) => {
        e.preventDefault();
        if (!emailRegex.test(userData.email)) {
            return showToastError('Please enter valid email address');
        }
        if (
            userData.email.trim() !== "" &&
            userData.password.trim() !== ""
        ) {
            const newData = { ...userData }
            setRecords([...records, newData]);
            setUserData({
                email: "",
                password: "",
            })
            // console.log(JSON.stringify(newData));

            // Sending data to the server
            fetch(`${import.meta.env.VITE_APP_SERVER_URL}/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newData)
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (!data.error) {
                    toast.success(`${data.message}`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                } else {
                    showToastError(data.error);
                }
            });
        }
        else {
            // Handle validation error here, e.g., show an error message.
            showToastError('Please fill in all fields.');
        }
    }
    return (
        <div className='flex flex-col gap-3'>
            <div className="border-2 border-gray-300 p-10 rounded-2">
                <div className="flex items-center justify-center flex-col mb-10">
                    <img src={instaLogo} alt="InstaLogo" className='h-28 w-48' />
                </div>
                <form className="flex gap-3 flex-col" onSubmit={submitForm}>
                    <input type="text" name='email' id='email' className="border-2 border-gray-500 px-10 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Enter Email" value={userData.email} onChange={handleInput} />
                    <input type="text" name='password' id='password' className="border-2 border-gray-500 px-10 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Password" value={userData.password} onChange={handleInput} />
                    <button className="rounded-lg bg-blue-500 text-white px-10 py-2 hover:bg-blue-600">Login</button>
                    <span className='text-sm text-blue-500 hover:text-blue-600 text-center my-2 cursor-pointer'>Forgot Password ?</span>
                </form>
            </div>
            <div className="border-2 border-gray-300 p-5 rounded-2 text-center">
                Don{`'`}t have an account?<Link to="/signup" className='text-blue-500 mx-1 hover:cursor-pointer hover:text-blue-600'>Sign up</Link>
            </div>
            <div className="p-5 text-center flex flex-col gap-4">
                <span>Get the app.</span>
                <div className="flex gap-4 items-center justify-center">
                    <img src={playstore} alt="playstore" className='h-10 w-32 hover:cursor-pointer rounded-sm' draggable="false" />
                    <img src={microsoftstore} alt="microsoftstore" className='h-10 w-32 hover:cursor-pointer rounded-sm' draggable="false" />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login