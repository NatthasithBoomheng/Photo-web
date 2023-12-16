const Item = (props) => {
    const {picture, onPictureOpenClick} = props;
    return(
        <>

        <div className="border-2 border-black rounded hover:cursor-grab">
            <img src={picture.link} alt="" onClick={()=>{onPictureOpenClick(picture)}}/>
            <div className="flex flex-row justify-center">
                <h1 className="md:mt-0 sm:mt-4 lg:mt-1 mb-2 lg:text-2xl md:text-xl sm:text-sm font-semibold">{picture.title}</h1>
            </div>
        </div>
        
        </>
    )
}

export default Item