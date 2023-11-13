import posts from "../api/post";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSave } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi'
import { BsEmojiSmile } from 'react-icons/bs'

const Post = () => {
    return (
        <div className="flex flex-col gap-1 items-center">
            {
                posts.map((ele, index) => {
                    return (
                        <div key={index} className="flex flex-col border-b">
                            <div className="top flex justify-between py-2">
                                <div className="flex gap-2">
                                    <div className="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-600 to-pink-500 overflow-clip h-[40px] w-[40px] cursor-pointer">
                                        <div className="h-[37px] w-[37px] bg-white rounded-full overflow-clip">
                                            <img src={ele.profile} alt="" className="h-auto w-auto" />
                                        </div>
                                    </div>
                                    <div className="username flex flex-col">
                                        <span className="flex gap-2 font-bold">{ele.username}<span className="text-gray-600 font-normal">• 40m</span> </span>
                                        <span className="text-sm text-[12px]">{ele.location}</span>
                                    </div>
                                </div>
                                <div className="dot cursor-pointer">
                                    <BsThreeDotsVertical></BsThreeDotsVertical>
                                </div>
                            </div>
                            <img className="post w-[470px] h-auto" src={ele.post} alt={ele.caption} />
                            <div className="icons flex justify-between py-2">
                                <div className="flex gap-3">
                                    <span><AiOutlineHeart className="h-7 w-7 cursor-pointer"></AiOutlineHeart></span>
                                    <span><FiMessageCircle className="h-7 w-7 cursor-pointer"></FiMessageCircle></span>
                                    <span><FiSend className="h-7 w-7 cursor-pointer"></FiSend></span>
                                </div>
                                <div><AiOutlineSave className="h-7 w-7 cursor-pointer"></AiOutlineSave></div>
                            </div>
                            <div className="likes justify-start font-bold cursor-pointer">{ele.likes} likes</div>
                            <div className="caption font-bold max-w-[470px]">
                                {ele.username}
                                <span className="font-normal mx-2">
                                    {ele.caption.length > 90 ? (
                                        <>{ele.caption.slice(0, 92)} <spam className="text-gray-600 cursor-pointer">...more</spam></>
                                    ) : (
                                        ele.caption
                                    )}
                                </span>
                            </div>

                            <div className="comments flex flex-col">
                                <span className="text-gray-600 cursor-pointer">View all {ele.comments} comments</span>
                                <div className="flex justify-between">
                                    <input type="text" className="outline-none border-none my-2" placeholder="Add a comment" />
                                    <div className="flex items-center gap-2">
                                        <BsEmojiSmile className="text-gray-600 cursor-pointer"></BsEmojiSmile>
                                        <span className="text-blue-500 cursor-pointer hover:text-blue-600 duration-300">Post</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default Post
