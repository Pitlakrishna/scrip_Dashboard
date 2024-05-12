import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
    return (
        <div className='bg bg-dark text-white p-2' >
            <div  >
                <div className=' text-white footerbox1 d-flex ' >
                    <hr className=' text-white d-block d-md-none' />
                    <div className='mb-2' >
                        <h1 className='header' >BE THE FIRST TO KNOW</h1>
                        <p className='' >sign up for updates from App Scrip</p>
                        <div className='d-flex' >
                            <input className='form-control w-50 me-2' type='email' placeholder='Enter your mail' />
                            <label className='btn btn-outline-light'  >SUBSCRIBE</label>
                        </div>
                    </div>
                    <div className='mb-2' >
                        <h1 className='header'  >CONTACT US</h1>
                        <h3 style={{ fontSize: 12 }} >+$$ 221 133 5380</h3>
                        <p>coustomercare@appscrip.com</p>
                        <h1 className='header' >CURRENCY</h1>
                        <p style={{ fontSize: 8 }}>transaction will be completed in Euros and a currency reference is available on hover</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='Footerbox2' >
                <ul className='d-none d-md-block text-start'>
                    <h3>About us</h3>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                </ul>
                <select className=" mb-2 d-md-none  form-select bg-transparent text-warning   " aria-label="Default select example">
                    <option selected>About us</option>
                    <option >Stories</option>
                    <option value="1">Artisans</option>
                    <option value="2">Boutiques</option>
                    <option value="3">Contact Us</option>
                    <option value="4" >EU Compliances Docs</option>
                </select>
                <ul className=' text-start d-none d-md-block' >
                    <h3>QUICK LINKS</h3>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <select className=" d-md-none form-select form-control bg-transparent text-warning " aria-label="Default select example">
                    <option selected>QUICK LINKS</option>
                    <option>Orders & Shipping</option>
                    <option>Join/Login as a Seller</option>
                    <option>Payment & Pricing</option>
                    <option>Return & Refunds</option>
                    <option>FAQs</option>
                    <option>Privacy Policy</option>
                    <option>Terms & Conditions</option>
                </select>
                <div className='text-center ' >
                    <h3>FOLLOW US</h3>
                    <div className='icon' >
                        <FaInstagram size={25} color='orange' /> <CiLinkedin size={30} color='blue' />
                    </div>
                    <p>Accepted Payment Methods:</p>
                    <div className='icon' >
                        <img src='https://appscrip-test-jayaram.netlify.app/images/payment-visa.png' alt='photo' />
                        <img src='https://appscrip-test-jayaram.netlify.app/images/payment-iphone.png' alt='photo' />
                        <img src='https://appscrip-test-jayaram.netlify.app/images/payment-paypal.png' alt='photo' />
                        <img src='https://appscrip-test-jayaram.netlify.app/images/payment-gpay.png' alt='photo' />
                        <img src='https://appscrip-test-jayaram.netlify.app/images/payment-amex.png' alt='photo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer