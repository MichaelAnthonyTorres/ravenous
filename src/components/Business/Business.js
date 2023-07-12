import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Business.css'




function Business({business}){
    return (
        <div className="Business">
            <div>
                <img src={business.imageSrc} alt=''/>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-info">
                <div className="address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${business.rating} stars`}</h3>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business