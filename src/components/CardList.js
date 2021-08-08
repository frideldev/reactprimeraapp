import React from 'react'
import { UseImages } from '../hooks/UseImages'
import { CardItem } from './CardItem';

export const CardList = () => {
    const {data,loading} = UseImages();
    return (
         <div className="card-grid">
             {
                 data.map(img=><CardItem key={img.id} {...img} />)
             }
        </div>   
    )
}
