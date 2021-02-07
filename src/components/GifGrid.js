import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__fadeIn"> {category} </h3>
            {loading && 'cargando'}
            <div className="card-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    )
}

GifGrid.prototypes = {
    category: PropTypes.string.isRequired
}