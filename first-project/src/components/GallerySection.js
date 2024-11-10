import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
    return (
        <section className="gallery" id="gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
                <div className="gallery-item item-1"></div>
                <div className="gallery-item item-2"></div>
                <div className="gallery-item item-3"></div>
            </div>
        </section>
    );
}

export default GallerySection;
