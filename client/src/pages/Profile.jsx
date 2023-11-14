import Highlights from "../components/Highlights"
import PostGrid from "../components/PostGrid"
import ProfileDetails from "../components/ProfileDetails"
import { Sidebar } from "../components/Sidebar"

const Profile = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="flex flex-col ml-[15rem] gap-2 w-3/4 pl-[10rem]">
                <ProfileDetails></ProfileDetails>
                <Highlights></Highlights>
                <PostGrid></PostGrid>
            </div>
        </>
    )
}

export default Profile
