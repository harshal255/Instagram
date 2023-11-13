import story from "../api/story"

const Story = () => {
    return (
        <div className="h-32 gap-5 m-10 overflow-auto xl:flex scroll-snap-type-x mandatory scrollbar-hide">
            {
                story.map((ele) => {
                    return (
                        <div key={ele.username} className="flex flex-col gap-2 items-center justify-center cursor-pointer">
                            <div className="rounded-full p-[3px] bg-gradient-to-tr from-yellow-600 to-pink-500 overflow-clip">
                                <div className="h-[70px] w-[70px] bg-white rounded-full p-[1px] overflow-clip">
                                    <img src={ele.profile} alt="" className="h-auto w-auto" />
                                </div>
                            </div>
                            <span className="text-sm font-light"> {ele.username.length > 10 ? `${ele.username.slice(0, 10)}...` : ele.username}</span>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Story
