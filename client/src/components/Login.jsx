import instaLogo from '../assets/images/insta_text_logo.png';
import playstore from '../assets/images/playstore.png'
import microsoftstore from '../assets/images/microsoftstore.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className="border-2 border-gray-300 p-10 rounded-2">
                <div className="flex items-center justify-center flex-col mb-10">
                    <img src={instaLogo} alt="InstaLogo" className='h-28 w-48' />
                </div>
                <form className="flex gap-3 flex-col">
                    <input type="text" className="border-2 border-gray-500 px-10 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Username or MobileNo or Email" />
                    <input type="text" className="border-2 border-gray-500 px-10 py-2 rounded-lg outline-none hover:border-gray-900" placeholder="Password" />
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
        </div>
    )
}

export default Login