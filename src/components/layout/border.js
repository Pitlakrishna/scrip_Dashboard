import React, { useContext } from 'react';
import { MyContext } from './contextapi';

function Border() {
    const { value, setValue } = useContext(MyContext);

    const hanadleFilter = () => {
        setValue(!value)
    }

    return (
        <div className='text-center banner d-flex flex-column' >
            <div>
                <hr className='w-100' />
                <h1 className='header' >DISCOVER OUR PRODUCTS</h1>
                <p className='para' >Explore endless possibilities with our diverse range of products,
                    curated just for you. Discover convenience and quality in every click with our e-commerce offerings
                </p>
            </div>
            <hr className='w-100' />
            <div className='bannerBottom' >
                <div className='d-flex align-items-center' >
                    <h1 className='fs-6' >20 ITEMS</h1>
                    <button onClick={hanadleFilter} className='butnFilter'  > {value === true ? "HIDE FILTER" : "SHOW FILTER"}  </button>
                </div>
                <div>
                    <select className="  form-select form-control bg-transparent text-dark " aria-label="Default select example">
                        <option selected>RECOMMENDED:</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Price : High to Low</option>
                        <option>Price : Low to High</option>
                    </select>
                </div>
            </div>
            <hr className='w-100' />
        </div>
    )
}

export default Border