
const Navbar = (props)=>{
    const {func,setfunc} = props;
    return(
        <div className="">
            <div className="flex mx-auto p-5 border-2 border-black rounded">
                <div className=" w-full  flex flex-row justify-between " >
                <h1 className="mt-1.5 font-semibold text-2xl block  text-black rounded  md:hover:bg-transparent md:border-0 ">
                Photo Web</h1>
                <input type="text" placeholder=" Search" className="rounded-3xl text-black border-black border-2 px-4 focus:ring-2 focus:ring-gray-300" value={func} onChange={(event)=>{setfunc(event.target.value)}}/>
            </div>
        </div>
    </div>
    )
}

export default Navbar