const PicturePick = (props) => {
    const {picture, onButtonCloseClick} = props;
    return (
        <div className="z-50 fixed flex flex-col justify-center inset-x-0 inset-y-0 mx-auto p-10 lg:max-w-full bg-A ">
            <button type="button" class="text-white  bg-black border-black border-2 hover:border-transparent hover:text-red-500 font-medium text-lg px-5 py-2.5 flex flex-row justify-end" 
                onClick={onButtonCloseClick}>
                X
                </button>
            <img src={picture.link} alt="" className="border-2 border-black"/>
            <div className="flex flex-row justify-center border-2 border-black bg-black">
                <h1 className="text-white mt-2 mb-2 lg:text-2xl md:text-xl sm:text-sm font-semibold ">{picture.title}</h1>
            </div>
        </div>
    )
}

export default PicturePick