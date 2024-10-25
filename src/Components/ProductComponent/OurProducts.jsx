import React, { useState } from 'react';
import product from '../../assets/banner.jpg';
import out1 from '../../assets/out1.jpg';
import school1 from '../../assets/school1.jpg';
import out2 from '../../assets/out2.jpg';
import school2 from '../../assets/school2.jpg';

// Sample data for categories and subcategories
const categories = [
    {
        category: 'New Arrivals - Furniture',
        subcategories: [
            'Table & Chair',
            'Rockers',
            'Slides',
            'See Saw',
            'Playpen',
            'Multi-Purpose',
            'Easels',
            'Multipurpose',
            'Bookshelf',
            'Swings',
            'Slide',
            'Swing',
            'Swing & Slide Combo',
            'Balancing Boards',
            'Balancing Board',
            'Rocker',
            'Games',
            'Ride-Ons',
            'Sports',
        ],
    },
    {
        category: 'Bestsellers',
        subcategories: [],
    },
    {
        category: 'Indoor',
        subcategories: [
            'Table & Chair',
            'Rockers',
            'Slides',
            'See Saw',
            'Playpen',
            'Multi-Purpose',
            'Easels',
            'Multipurpose',
            'Bookshelf',
            'Swings',
            'Slide',
            'Swing',
            'Swing & Slide Combo',
            'Balancing Boards',
            'Balancing Board',
            'Rocker',
            'Games',
            'Ride-Ons',
            'Sports',
        ],
    },
    {
        category: 'Toys',
        subcategories: [],
    },
    {
        category: 'Indoor Play',
        subcategories: [
            'Gym Equipment',
            'Stand Alone Series',
            'The Castle Collection',
            'The Dinosaur Collection',
            'The Nature Collection',
            'The Robot Collection',
        ],
    },
    {
        category: 'Outdoor Play',
        subcategories: [],
    },
    {
        category: 'School Furniture',
        subcategories: [
            'Collaborative Series',
            'Cute Chair Series',
            'Classroom Series',
            'Kids Desk Series',
            'Plastic Series',
            'Seating Series',
            'Wooden Series',
        ],
    },
    {
        category: 'Best Sellers',
        subcategories: [],
    },
    {
        category: 'Uncategorized',
        subcategories: [],
    },
    {
        category: 'Healthcare',
        subcategories: [],
    },
    {
        category: 'New Arrivals',
        subcategories: [],
    },
];

const products = [
    {
        image:out1,
        title: 'OK PLAY MERRY GO ROUND- TODDLER’S',
        price: 55999,
        description: 'The product is manufactured in India',
        additionalInfo: 'Incl. of all Taxes',
        actions: ['INQUIRE US', 'Add to wishlist'],
    },
    {
        image:school1,
        title: 'OK PLAY SLIDE COMBO',
        price: 45999,
        description: 'A colorful slide combo set for toddlers. Made with safe materials and designed for outdoor play.',
        additionalInfo: 'Incl. of all Taxes',
        actions: ['INQUIRE US', 'Add to wishlist'],
    },
    {
        image:out2,
        title: 'OK PLAY SWING SET',
        price: 25999,
        description: 'Durable swing set with rubberized seats and PVC coated chains for maximum safety.',
        additionalInfo: 'Incl. of all Taxes',
        actions: ['INQUIRE US', 'Add to wishlist'],
    },
    {
        image:school2,
        title: 'OK PLAY CLIMBING FRAME',
        price: 35999,
        description: 'Sturdy climbing frame for kids with a safe design. Powder-coated structure ensures durability.',
        additionalInfo: 'Incl. of all Taxes',
        actions: ['INQUIRE US', 'Add to wishlist'],
    },
];

const CategorySection = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 60000]);
    const [sortAlphabetically, setSortAlphabetically] = useState(false);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    // Function to filter products by selected price range
    const filteredProducts = products
        .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
        .sort((a, b) => {
            if (sortAlphabetically) {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

    return (
        <div className=" h-full">
            <div
                className="text-white py-16 px-8 font-sans"
                style={{ backgroundImage: `url(${product})`, backgroundSize: 'full', backgroundPosition: '' }}
            ></div>
                <div className="container border-4 bg-gray-700  mx-auto flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8">
                    <div className="md:w-2/5 md:text-left">
                        <h2 className="text-3xl mb-4 mt-2 font-bold text-green-500 items-center">Collaboration</h2>
                        <p className="text-2xl text-white font-bold p-5 m-3">
                        Let’s creatively brainstorm and prioritize the desired project outcomes. We’ll consider historical, cultural, and educational opportunities, explore accessibility and universal design
                        </p>
                    </div>

                    <div className="md:w-1/2 flex">
                        <button type="button" className="bg-green-500 text-gray-800 py-3 px-6 font-semibold rounded">
                            Contact Us Today
                        </button>
                    </div>
                
            </div>

            {/* Price Filter and Sorting Options */}
            <div className="my-6">
                <div className="flex justify-center items-center gap-4">
                    <label htmlFor="priceRange" className="font-semibold">Price Range:</label>
                    <input
                        type="range"
                        id="priceRange"
                        min="0"
                        max="60000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                        className="w-1/2"
                    />
                    <span>{`₹0 - ₹${priceRange[1]}`}</span>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4">
                    <label className="font-semibold">Sort Alphabetically:</label>
                    <input
                        type="checkbox"
                        checked={sortAlphabetically}
                        onChange={() => setSortAlphabetically(!sortAlphabetically)}
                    />
                </div>
            </div>

            {/* Category Section */}
            <h2 className="text-3xl text-green-500 font-bold text-center mt-10">Product Categories</h2>
            <div className="mt-6 flex flex-col md:flex-row">
                {/* Sticky Category Sidebar */}
                <div className="sticky top-2 h-full w-full md:w-1/4 md:mr-10 bg-white shadow-md">
                    {categories.map((categoryItem, index) => (
                        <div className="border-b border-gray-200" key={index}>
                            <h2 className="bg-gray-100 px-4 py-2">
                                <button
                                    className="flex justify-between w-full text-left text-md font-medium text-gray-700"
                                    onClick={() => toggleCategory(categoryItem.category)}
                                >
                                    {categoryItem.category}
                                    {categoryItem.subcategories.length > 0 && (
                                        <span className={`transition-transform transform text-green-500 ${openCategory === categoryItem.category ? 'rotate-90' : ''}`}>
                                            ➔
                                        </span>
                                    )}
                                </button>
                            </h2>
                            {openCategory === categoryItem.category && (
                                <div className="px-4 py-2">
                                    <div className="text-gray-600">
                                        {categoryItem.subcategories.map((subCategory, subIndex) => (
                                            <div key={subIndex} className="text-md mb-1 ml-4">
                                                {subCategory}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Products Section */}
                <div className="flex flex-wrap justify-center md:w-3/4 h-fit gap-6">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="bg-white shadow-sm rounded-xl w-full md:w-60 border border-green-500 overflow-hidden transition-transform transform hover:scale-105">
                            <div className="overflow-hidden rounded-t-xl h-64 group">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col justify-between h-64 p-4 bg-gray-100">
                                <div className="text-center flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                                    <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-green-500 text-black px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-green-600">
                                        More items...
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CategorySection;
