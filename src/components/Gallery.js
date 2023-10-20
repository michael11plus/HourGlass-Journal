import React, { useState } from 'react';
import './gallery.css';
import { galleryData } from '../data/newsData';

const Gallery = () => {

    return (
        <div className='gallery'>
           
                {galleryData.map((item, index) => (
                     <div className='gallery--content'>
                        <img key={item.ref} src={item.image} alt={`Image ${index}`} className='gallery--content--pic' />
                        <div className='gallery--content--details'>
                            {item.text}
                            <span className='gallery--content--year'> - {item.year} </span>
                        </div>
                    </div>
                ))}
            
        </div>
    )
}

export default Gallery;
