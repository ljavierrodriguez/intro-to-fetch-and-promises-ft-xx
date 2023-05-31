import React, { useRef, useState } from 'react'

const Gallery = () => {

    const [images, setImages] = useState([
        "https://picsum.photos/id/100/500/250",
        "https://picsum.photos/id/200/500/250",
        "https://picsum.photos/id/300/500/250",
        "https://picsum.photos/id/400/500/250",
    ])

    const imgRef = useRef();

    const changeImage = img => {
        imgRef.current.src = img;
    }

  return (
    <div className='d-flex flex-column w-50 mx-auto'>
        <div className="loading">
            <img className='w-100' height={250} ref={imgRef} />
        </div>
        <div className="images f-flex flex-wrap">
            {
                images.map((img) => <img src={img} alt="" width={130} height={100} onClick={() => changeImage(img)} />)
            }
        </div>
    </div>
  )
}

export default Gallery