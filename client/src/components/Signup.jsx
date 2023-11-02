import { Link } from 'react-router-dom';
import instaLogo from '../assets/images/insta_text_logo.png';

const Login = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className="border-2 border-gray-300 p-10 rounded-2">
                <div className="flex items-center justify-center flex-col mb-10">
                    <img src={instaLogo} alt="InstaLogo" className='h-28 w-48' />
                    <span className='text-gray-500 font-semibold w-2/3 text-center'>Sign up to see photos and videos from your friends.</span>

                </div>

                <form className="flex gap-3 flex-col">
                    <input type="text" className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Mobile No or Email" />
                    <input type="text" className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Full Name" />
                    <input type="text" className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Username" />
                    <input type="text" className="border-2 border-gray-500 px-8 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Password" />

                    <button className="rounded-lg bg-blue-500 text-white px-10 py-2 hover:bg-blue-600">Signup</button>
                </form>
            </div>
            <div className="border-2 border-gray-300 p-5 rounded-2 text-center">
                Have an account?<Link to="/" className='text-blue-500 mx-1 hover:cursor-pointer hover:text-blue-600'>Log in</Link>
            </div>
        </div>
    )
}

export default Login