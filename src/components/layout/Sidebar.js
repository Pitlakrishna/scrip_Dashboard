import React from 'react';
import { IoChevronDown } from "react-icons/io5";


function Sidebar() {

    return (
        <div className='text-white'   >
            <div className='text-start ' >
                <input type='checkbox' className='ms-2' style={{ width: 15, height: 15 }} />
                <label className='text-dark ps-3 '  >CUSTOMIZABLE</label>
            </div>
            <div className=" text-dark" >
                <div>
                    <div className='d-flex justify-content-between ps-5 pe-5' >
                        <label>Ideal For</label>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".one"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <IoChevronDown size={23} />
                        </button>
                    </div>
                    <ul className='one collapse navbar-collapse '  >
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Men</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Women</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Baby & Kids</li>
                    </ul>
                </div>
                <div>
                    <div className='d-flex justify-content-between ps-5 pe-5' >
                        <label>Occasion</label>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".two"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <IoChevronDown size={23} />
                        </button>
                    </div>
                    <ul className='two collapse navbar-collapse '  >
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Men</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Women</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Baby & Kids</li>
                    </ul>
                </div>
                <div>
                    <div className='d-flex justify-content-between ps-5 pe-5' >
                        <label>Work</label>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".three"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <IoChevronDown size={23} />
                        </button>
                    </div>
                    <ul className='three collapse navbar-collapse '  >
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Men</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Women</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Baby & Kids</li>
                    </ul>
                </div>
                <div>
                    <div className='d-flex justify-content-between ps-5 pe-5  ' >
                        <label>Fabric</label>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".four"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <IoChevronDown size={23} />
                        </button>
                    </div>
                    <ul className='four collapse navbar-collapse '  >
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Men</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Women</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Baby & Kids</li>
                    </ul>
                </div>
                <div className='sideItem' >
                    <div className='d-flex justify-content-between ps-5 pe-5' >
                        <label>Segment</label>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target=".five"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <IoChevronDown size={23} />
                        </button>
                    </div>
                    <ul className='five collapse navbar-collapse '   >
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Men</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Women</li>
                        <li><input className='me-2' type='checkbox' style={{ width: 15, height: 15 }} />Baby & Kids</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Sidebar