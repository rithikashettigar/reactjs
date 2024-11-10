import React from 'react';
import './CategoriesSection.css';

const CategoriesSection = () => {
    return (
        <section className="categories" id="categories">
            <h2>Cake Categories</h2>
            <div className="category-grid">
                <div className="category-card category-card-1">
                    <h3>Character Cake</h3>
                    <p>Starting from ₹500</p>
                </div>
                <div className="category-card category-card-2">
                    <h3>Birthday Cake</h3>
                    <p>Starting from ₹700</p>
                </div>
                <div className="category-card category-card-3">
                    <h3>Eggless Cakes</h3>
                    <p>Starting from ₹400</p>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;
