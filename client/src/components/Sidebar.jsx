import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import instaLogo from '../assets/images/insta_text_logo.png';
import { AiFillHome, AiOutlineSearch, AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { BsCameraReels } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { IoCreateOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { FaThreads } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi';

export function Sidebar() {
    return (
        <Card className="min-h-screen w-full max-w-[15rem]  shadow-xl shadow-blue-gray-900/5 border-r-2 fixed top-0 bottom-0 left-0">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray" className="flex items-center justify-center">
                    <img src={instaLogo} alt="" className='h-auto w-40' />
                </Typography>
            </div>
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <AiFillHome className="h-5 w-5" />
                    </ListItemPrefix>
                    Home
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <AiOutlineSearch className="h-5 w-5" />
                    </ListItemPrefix>
                    Search
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <MdOutlineExplore className="h-5 w-5" />
                    </ListItemPrefix>
                    Explore
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <BsCameraReels className="h-5 w-5" />
                    </ListItemPrefix>
                    Reels
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <AiOutlineMessage className="h-5 w-5" />
                    </ListItemPrefix>
                    Messages
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <IoNotificationsOutline className="h-5 w-5" />
                    </ListItemPrefix>
                    Notifications
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <IoCreateOutline className="h-5 w-5" />
                    </ListItemPrefix>
                    Create
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <CgProfile className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <FaThreads className="h-5 w-5" />
                    </ListItemPrefix>
                    Threads
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <GiHamburgerMenu className="h-5 w-5" />
                    </ListItemPrefix>
                    More
                </ListItem>
            </List>
        </Card>
    );
}