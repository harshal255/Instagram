import Login from "../components/Login"
import Mobilescreen from "../components/Mobilescreen"


const Home = () => {
    return (
        <div className="flex w-[100vw] h-[100vh] justify-evenly items-center md:px-64 border-2 border-red-500">
            <Mobilescreen></Mobilescreen>
            <Login></Login>
        </div>
    )
}

export default Home
