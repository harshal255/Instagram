import { Link, useNavigate } from 'react-router-dom';
import instaLogo from '../assets/images/insta_text_logo.png';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        username: "",
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
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*_])[A-Za-z\d@#$%^&!*_]{8,}$/;


    const submitForm = (e) => {
        e.preventDefault();
        if (!emailRegex.test(userData.email)) { 
            return showToastError('Please enter valid email address');
        } else if (!strongPasswordRegex.test(userData.password)) {
            return showToastError('Password must contain at least 8 digit including at least 1 special character, 1 number , 1 Uppercase character and 1 lower case character')
        }
        if (
            userData.name.trim() !== "" &&
            userData.username.trim() !== "" &&
            userData.email.trim() !== "" &&
            userData.password.trim() !== ""
        ) {
            const newData = { ...userData };
            setRecords([...records, newData]);
            setUserData({
                name: "",
                username: "",
                email: "",
                password: "",
            });
            console.log(JSON.stringify(newData));



            // Sending data to the server
            fetch('http://localhost:5000/signup', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newData)
            }).then(res => res.json()).then(data => {

                toast.info(`${data.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                navigate('/');

            });

        } else {
            // Handle validation error here, e.g., show an error message.
            showToastError('Please fill in all fields.');
        }
    }



    return (
        <div className='flex flex-col gap-3'>
            <div className="border-2 border-gray-300 p-10 rounded-2">
                <div className="flex items-center justify-center flex-col mb-10">
                    <img src={instaLogo} alt="InstaLogo" className='h-28 w-48' />
                    <span className='text-gray-500 font-semibold w-2/3 text-center'>Sign up to see photos and videos from your friends.</span>
                </div>

                <form className="flex gap-3 flex-col" onSubmit={submitForm}>
                    <input type="text" name='email' id='email' className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Email" value={userData.email} onChange={handleInput} />
                    <input type="text" name='name' id='name' className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Full Name" value={userData.name} onChange={handleInput} />
                    <input type="text" name='username' id='username' className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Username" value={userData.username} onChange={handleInput} />
                    <input type="text" name='password' id='password' className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Password" value={userData.password} onChange={handleInput} />

                    <button className="rounded-lg bg-blue-500 text-white px-10 py-2 hover:bg-blue-600">Signup</button>
                </form>
            </div>
            <div className="border-2 border-gray-300 p-5 rounded-2 text-center">
                Have an account?<Link to="/" className='text-blue-500 mx-1 hover:cursor-pointer hover:text-blue-600'>Log in</Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login