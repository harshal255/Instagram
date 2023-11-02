import Signup from '../components/Signup'
import Mobilescreen from "../components/Mobilescreen"


const Home = () => {
    return (
        <div className="flex w-[100vw] h-[100vh] justify-evenly items-center px-64 border-2 border-red-500">
            <Mobilescreen></Mobilescreen>
            <Signup />
        </div>
    )
}

export default Home
