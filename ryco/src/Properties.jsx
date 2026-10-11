import { useState } from 'react';
import PropertyCard from './PropertyCard';

function Properties() {

    const [selectedProperty, setSelectedProperty] = useState(null);


    const properties = [

        {
            id: 1,
            title: 'Modern Family House',
            location: 'Mapusa, Goa',
            price: '85,00,000',
            bedrooms: 3,
            bathrooms: 2,
            area: '1800 sq.ft',
            description:
                'A modern family house located in a peaceful residential area.'
        },

        {
            id: 2,
            title: 'Luxury Apartment',
            location: 'Porvorim, Goa',
            price: '65,00,000',
            bedrooms: 2,
            bathrooms: 2,
            area: '1200 sq.ft',
            description:
                'A comfortable apartment with modern facilities and easy access to the city.'
        },

        {
            id: 3,
            title: 'Beachside Villa',
            location: 'Calangute, Goa',
            price: '1,20,00,000',
            bedrooms: 4,
            bathrooms: 3,
            area: '2400 sq.ft',
            description:
                'A spacious villa located close to the beach and tourist attractions.'
        },

        {
            id: 4,
            title: 'Budget Apartment',
            location: 'Tivim, Goa',
            price: '35,00,000',
            bedrooms: 2,
            bathrooms: 1,
            area: '900 sq.ft',
            description:
                'An affordable apartment suitable for a small family.'
        }

    ];


    return (

        <div className="page">

            <h1>Available Properties</h1>

            <p>
                Explore some of our featured properties.
            </p>


            <div className="property-grid">

                {properties.map((property) => (

                    <PropertyCard
                        key={property.id}
                        property={property}
                        onReadMore={setSelectedProperty}
                    />

                ))}

            </div>


            {selectedProperty && (

                <div className="property-details">

                    <h2>{selectedProperty.title}</h2>

                    <p>
                        <strong>Location:</strong>{' '}
                        {selectedProperty.location}
                    </p>

                    <p>
                        <strong>Price:</strong>{' '}
                        ₹{selectedProperty.price}
                    </p>

                    <p>
                        <strong>Bedrooms:</strong>{' '}
                        {selectedProperty.bedrooms}
                    </p>

                    <p>
                        <strong>Bathrooms:</strong>{' '}
                        {selectedProperty.bathrooms}
                    </p>

                    <p>
                        <strong>Area:</strong>{' '}
                        {selectedProperty.area}
                    </p>

                    <p>
                        {selectedProperty.description}
                    </p>

                    <button
                        onClick={() => setSelectedProperty(null)}
                    >
                        Close
                    </button>

                </div>

            )}

        </div>

    );

}

export default Properties;