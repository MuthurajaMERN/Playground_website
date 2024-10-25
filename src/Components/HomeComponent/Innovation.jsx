import React from 'react';
import vector from '../../assets/school1.jpg';
import experts from '../../assets/second.webp';
import { Link } from 'react-router-dom';

const Innovation = () => {
    return (
        <div className=''>
            <div className='flex justify-between'>
            <img
                src={vector}
                alt="An illustrative background depicting innovation in machinery"
                className='w-object-full'
            />
            <div className='p-2 top-20 left-8 right-4 text-black mt-20 w-1/3 font-medium'>
                <h1 className='text-3xl font-bold mb-4 text-center'>Bringing Your Vision to Life</h1>
                <p>
                It doesn't matter if you have a big or small budget, existing vision or not, our team will work with you until we settle on a design that you and your stakeholders love
                </p>


                <p className='mt-2'>
                Our commitment to designing parks and playgrounds using industry leading, evidence-based design principles has lead to many of our parks being awarded a National Demonstration Site Network designation. These designations recognize parks that exemplify health-related initiatives and follow design best practices.
                </p>
            </div>
            </div>

            {/* <div className='d-flex flex-row items-center justify-center mt-16 border bg-gray-300'>
                <div className='w-1/2 flex items-center justify-center'>
                    <img
                        src={experts}
                        alt="Experts in machinery"
                        className='w-3/4 h-auto' // Adjust width to 3/4 to fit better
                    />
                </div>
                <div className='w-1/2 text-left'>
                    <h2 className='text-xl font-semibold'>
                        Leading Exporter of All Types of Machinery
                    </h2>
                    <p className='mt-2'>
                        We have been in the industry since 2015. Over the years, we have become the world’s leading exporter of all types of machinery, providing premium products and excellent service.
                    </p>
                </div>
            </div> */}
            <div className="bg-gray-100 font-[sans-serif] relative max-w-full mx-auto rounded overflow-hidden mt-4">
                <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 py-10 border-y-8 border-green-400">
                    <div className="text-center px-6">
                        <h3 className="font-extrabold text-2xl text-green-500 leading-tight"><span className="text-gray-800"></span>   Leading Exporter of All Award-winning designs</h3>
                        <p className="text-gray-800 text-base leading-relaxed mt-4">Our aim at Park N Play Design is to make this process as stress-free as possible.  Regardless of your project budget or size, you get the exact same level of commitment and enthusiasm.
‍
As parents, we understand the influence a well-designed play space can have on the development of healthy, confident, and well-rounded children.

                        </p>

                       <Link to='/Contact'>
                            <button type="button" className="bg-gradient-to-r hover:bg-gradient-to-l from-green-400 to-green-600 hover:bg-green-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
                                Get Started
                            </button>
                       </Link>
                    </div>

                    <div className="bg-gradient-to-tr from-green-400 to-green-600  w-full h-max">
                        <div className="p-2">
                            <img src={experts} className="w-full" alt="img" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Innovation;
