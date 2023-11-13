import Suggestion from "../api/suggestion";
import harshal from '../assets/images/profile/harshal4.png';

const RightSection = () => {
    return (
        <div className="flex flex-col gap-5 ml-0 pl-0 m-10 p-10">
            <div className="flex items-center pt-2 mb-5">

                <img src={harshal} alt="harshal" className="h-[44px] w-[44px] rounded-full border border-black cursor-pointer" />

                <div className="flex flex-col ml-5 items-start justify-center w-[180px] h-[34px] cursor-pointer">
                    <span className="font-bold text-sm">undefined_harshal</span>
                    <span className="text-sm text-gray-600">Harshal Kahar</span>
                </div>
                <span className="text-blue-500 text-sm cursor-pointer">Switch</span>

            </div>
            <div className="flex justify-between w-[290px] text-sm">
                <span className="font-bold text-gray-600">
                    Suggested for you
                </span>
                <span className="cursor-pointer hover:text-gray-600 duration-300">
                    See All
                </span>
            </div>
            {
                Suggestion.map((ele) => {
                    return (
                        <div key={ele.username} className="flex items-center pt-2">

                            <img src={ele.profile} alt={ele.username} className="h-[44px] w-[44px] rounded-full border border-black cursor-pointer" />

                            <div className="flex flex-col ml-5 items-start justify-center w-[180px] h-[34px] cursor-pointer">
                                <span className="font-bold text-sm">{ele.username}</span>
                                <span className="text-sm text-gray-600">{ele.username}</span>
                            </div>
                            <span className="text-blue-500 text-sm cursor-pointer">Follow</span>

                        </div>
                    )
                }).slice(0, 5)
            }

            <div className="flex gap-2 text-[10px] text-gray-600 text-start items-start flex-wrap">
                <span>About</span><span>Help</span><span>Press</span><span> API</span><span>Jobs</span><span> Privacy</span><span>  Terms</span><span>Locations</span><span>  Language</span><span> Meta Verified</span>

            </div>
            <div className="text-[10px] text-gray-600">
                © 2023 Instagram from Meta
            </div>

        </div>
    )
}

export default RightSection

