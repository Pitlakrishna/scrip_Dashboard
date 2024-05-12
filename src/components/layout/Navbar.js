import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-md
        ">
            <div className="container-fluid">
                <div className='w-100 d-flex justify-content-between align-items-center' >
                    <div className='d-flex flex-row' >
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <RxHamburgerMenu className='menuIcon' />
                        </button>
                        <img className='ms-3' height='30px' src='https://appscrip-test-jayaram.netlify.app/images/campany_logo.png' />
                    </div>
                    <div className=' boxLogo text-center  justify-content-center align-items-center ' >
                        <h1 className='h2' >LOGO</h1>
                        <ul className='iconsList d-flex  listitems d-none d-md-block'  >
                            <li>Shop</li>
                            <li>Skills</li>
                            <li>Stores</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <Link className="navbar-brand" >
                        <ul className=' iconsList d-flex flex-row' >
                            <li><CiSearch /></li>
                            <li><IoMdHeartEmpty /></li>
                            <li><CiShoppingCart /></li>
                            <li><RiContactsLine /></li>
                        </ul>
                    </Link>
                </div>
                <div className="collapse navbar-collapse " id="navbarSupportedContent"   >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-md-none  ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" >
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar