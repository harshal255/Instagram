import RightSection from "../components/RightSection"
import { Sidebar } from "../components/Sidebar"
import Story from "../components/Story"
import Post from "../components/post"


const Home = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="ml-[15rem] flex w-[calc(100vw - 15rem)]">
                <div className="flex flex-col w-2/3">
                    <Story></Story>
                    <Post></Post>
                </div>
                <RightSection></RightSection>
            </div>
            


        </>
    )
}

export default Home