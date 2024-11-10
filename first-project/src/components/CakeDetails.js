import React from 'react';
import './CakeDetails.css';

const CakeDetails = () => {
    return (
        <section className="cake-details">
            <h2>Cake Details</h2>
            <div className="cake-info">
                <div className="image-container">
                   
                </div>
                <div className="details">
                    <h3>Our Cakes</h3>
                    <p>Experience the rich fusion of culture and cake. Perfect for festivals and celebrations!</p>
                    <label htmlFor="flavor">Choose a flavor:</label>
                    <select id="flavor">
                        <option>Rasmalai</option>
                        <option>Mango</option>
                        <option>Kesar Pista</option>
                        <option>Vanilla</option>
                        <option>Chocolate</option>
                    </select>
                    <label htmlFor="size">Choose a size:</label>
                    <select id="size">
                        <option>Small - ₹500</option>
                        <option>Medium - ₹1000</option>
                        <option>Large - ₹1500</option>
                    </select>
                    <button>Add to Cart</button>
                </div>
            </div>
        </section>
    );
}

export default CakeDetails;
