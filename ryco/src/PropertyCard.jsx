function PropertyCard({ property, onReadMore }) {

    return (

        <div className="property-card">

            <div className="property-image">

                🏠

            </div>

            <h2>{property.title}</h2>

            <p>{property.location}</p>

            <h3>₹{property.price}</h3>

            <p>
                {property.bedrooms} Bedrooms
            </p>

            <button
                onClick={() => onReadMore(property)}
            >
                Read More
            </button>

        </div>

    );

}

export default PropertyCard;