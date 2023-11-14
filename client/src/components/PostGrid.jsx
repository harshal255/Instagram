import { MdGridOn } from 'react-icons/md';
import { AiOutlineSave, AiFillHeart, AiOutlineMessage } from 'react-icons/ai';
import { BsCameraReels } from 'react-icons/bs';
import { FaUserTag } from 'react-icons/fa6';
import profile from '../api/profile';
const PostGrid = () => {
    return (
        <div>
            <hr />
            <div className="flex justify-center items-center gap-10">
                <span className="text-gray-600 flex gap-1 items-center cursor-pointer hover:border-t-2 border-black hover:text-black py-5"><MdGridOn></MdGridOn>POSTS</span>
                <span className="text-gray-600 flex gap-1 items-center cursor-pointer hover:border-t-2 border-black hover:text-black py-5"><AiOutlineSave></AiOutlineSave>REELS</span>
                <span className="text-gray-600 flex gap-1 items-center cursor-pointer hover:border-t-2 border-black hover:text-black py-5"><BsCameraReels></BsCameraReels>SAVED</span>
                <span className="text-gray-600 flex gap-1 items-center cursor-pointer hover:border-t-2 border-black hover:text-black py-5"><FaUserTag></FaUserTag>TAGGED</span>
            </div>
            <div className="grid grid-cols-3 gap-y-5">
                {
                    profile.posts.map((ele, index) => {
                        return (
                            <div key={index} className='relative h-[310px] w-[310px] overflow-clip group'>

                                <div className='absolute h-full w-full duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 z-10 bg-black/70'>
                                    <span className='flex gap-2 items-center cursor-pointer'><AiFillHeart className='text-white text-2xl'></AiFillHeart><span className='text-white text-2xl'>{ele.like}</span></span>
                                    <span className='flex gap-2 items-center cursor-pointer'><AiOutlineMessage className='text-white text-2xl'></AiOutlineMessage><span className='text-white text-2xl'>{ele.comments}</span></span>

                                </div>
                                <img src={ele.post} alt={index} className='object-cover' />
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default PostGrid
