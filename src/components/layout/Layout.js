import React, { useContext } from 'react';
import { MyContext } from './contextapi';
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Border from './border'

const Layout = ({ children }) => {
    const { value, setValue } = useContext(MyContext);
    return (
        <div className='row'  >
            <Navbar />
            <Border />
            <div className={value ? 'col-md-3' : 'd-none'}  >
                <Sidebar />
            </div>
            <div className={value ? 'col-md-9' : "col-md-12"}   ><main>{children}</main></div>
            <Footer />
        </div>
    )
}

export default Layout