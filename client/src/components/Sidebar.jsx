import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
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
import { useState } from "react";
import { BsEmojiSmile } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Sidebar() {

    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleOpen = () => {
        setOpen(!open);
        setSelectedFile(null)
    }

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
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        // Trigger the click event of the file input when the button is clicked
        document.getElementById('fileInput').click();
    };
    const handleDragOver = (event) => {
        event.preventDefault();

    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
            // Check if the file type is an image or video
            if (file.type.startsWith('image/png') ||
                file.type.startsWith('image/jpeg') ||
                file.type.startsWith('image/webp')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSelectedFile(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                showToastError('Invalid file type. Please drop an image or video file.');
            }
        }
    };




    return (
        <>
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
                    <ListItem onClick={handleOpen}>
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

            <Dialog open={open} handler={handleOpen} className="flex flex-col items-center h-3/4 justify-center pb-10">
                <DialogHeader className="text-sm font-normal">Create New Post here</DialogHeader>
                {
                    !selectedFile ? (<div>
                        <DialogBody>
                            <div className="flex items-center justify-center text-black hover:text-gray-600" onDragOver={handleDragOver}
                                onDrop={handleDrop}>
                                <svg aria-label="Icon to represent media such as images or videos" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                            </div>
                            <div className="text-3xl text-black" onClick={handleButtonClick}>Drag photos and videos here</div>

                        </DialogBody>
                        <DialogFooter className="flex justify-center">

                            <label htmlFor="fileInput">
                                <Button variant="gradient" color="blue" onClick={handleButtonClick}>
                                    <span>Select from Computer</span>
                                </Button>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </DialogFooter>
                    </div>) : (
                        <div>
                            {/* Render the preview, you can use an img or video tag depending on the file type */}
                            {selectedFile.startsWith('data:image') ? (
                                <div className="flex flex-col gap-2">
                                    <img src={selectedFile} alt="Preview" className="h-[15rem] w-auto" />
                                    <div className="flex  items-center justify-around text-black">
                                        <textarea type="text" className="outline-none border-none my-2 " placeholder="Add a caption" />
                                        <div className="flex items-center gap-2">
                                            <BsEmojiSmile className="text-gray-600 cursor-pointer"></BsEmojiSmile>
                                            <span className="text-blue-500 cursor-pointer hover:text-blue-600 duration-300">Share</span>
                                        </div>
                                    </div>

                                </div>
                            ) : (<div className="flex items-center justify-center">Please Select Image</div>)}
                        </div>
                    )
                }

            </Dialog>
            <ToastContainer />

        </>
    );
}