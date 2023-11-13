import { IoSettingsSharp } from 'react-icons/io5'
import { AiOutlineLink } from 'react-icons/ai';
import profile from '../api/profile';

const ProfileDetails = () => {
    return (
        <div className='mt-20'>
            <div className="flex justify-center items-center gap-20">
                <div className="profilelogo">
                    <img src={profile.profile} alt="profile" className='h-[150px] w-[150px] rounded-full' />
                </div>
                <div className="details flex flex-col gap-2">
                    <span className="flex gap-5 justify-center items-center">
                        <span className='text-2xl font-light'>{profile.username}</span>
                        <button className='text-md font-bold bg-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-400 duration-200'>Edit Profile</button>
                        <button className='text-md font-bold bg-gray-200 rounded-lg p-2 cursor-pointer hover:bg-gray-400 duration-200'>View Archive</button>
                        <span className='cursor-pointer'><IoSettingsSharp></IoSettingsSharp></span>
                    </span>
                    <span className="flex items-center gap-5 justify-start">
                        <span className='font-bold cursor-pointer'>{profile.posts.length} <span className='font-normal'>posts</span></span>
                        <span className='font-bold cursor-pointer'>{profile.followers} <span className='font-normal'>followers</span></span>
                        <span className='font-bold cursor-pointer'>{profile.following} <span className='font-normal'>following</span></span>
                    </span>
                    <span className='name font-bold text-lg'>{profile.name}</span>
                    <span className='biodata'>{profile.biodata}</span>
                    <span className='flex'><a href={profile.link} target='_blank' rel="noreferrer" className='flex items-center gap-2 text-blue-700 hover:text-blue-800 duration-300'><AiOutlineLink></AiOutlineLink>{profile.link}</a></span>

                </div>
            </div>

        </div>
    )
}

export default ProfileDetails
