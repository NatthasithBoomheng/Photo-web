import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Item from './component/item'
import pictures from './data/pictures'
import PicturePick from './component/popup'

function App() {

  const [focus,setFouus] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onPictureOpenClick(number) {
    setFouus(number);
  }

  function onPictureCloseClick() {
    setFouus(null);
  }

  const filteredPictures = pictures.filter((picture)=> {
    return picture.title.includes(searchText);
  });


  const pictureElements = filteredPictures.map((picture,index)=>{
    return <Item key={index} picture ={picture} onPictureOpenClick={onPictureOpenClick} />;
  });

  let picturePick = null;
  if (!!focus){
    picturePick = <PicturePick picture={focus} onButtonCloseClick={onPictureCloseClick}/>
  }


  return (
    <>
      <Navbar func={searchText} setfunc={setSearchText}/>
      <div className='container mx-auto px-8 border-2 border-black mt-2'>
        <div className='grid lg:grid-cols-3 gap-3 mt-8 md:grid-cols-2 '>
          {pictureElements}
        </div>
      </div>
      {picturePick}
    </>
  )
}

export default App
