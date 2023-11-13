import profile from "../api/profile"
import { AiOutlinePlus } from 'react-icons/ai'
const Highlights = () => {
    return (
        <div>
            <div className="h-32 gap-10 m-10 overflow-auto xl:flex scroll-snap-type-x mandatory scrollbar-hide">
                {
                    profile.highlights.map((ele) => {
                        return (
                            <div key={ele.username} className="flex flex-col gap-2 items-center justify-center cursor-pointer">
                                <div className="rounded-full p-[3px] bg-gray-500 overflow-clip">
                                    <div className="h-[77px] w-[77px] bg-white rounded-full overflow-clip">
                                        <img src={ele.highlight} alt="" className="h-auto w-auto" />
                                    </div>
                                </div>
                                <span className="text-sm font-light">{ele.caption} </span>

                            </div>
                        )
                    })
                }
                <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
                    <div className="rounded-full p-[3px] bg-gray-500 overflow-clip">
                        <div className="h-[77px] w-[77px] bg-white rounded-full overflow-clip flex items-center justify-center">
                            <AiOutlinePlus className="text-gray-500 text-4xl"></AiOutlinePlus>
                        </div>
                    </div>
                    <span className="text-sm font-light">New</span>
                </div>
            </div>

        </div>
    )
}

export default Highlights
