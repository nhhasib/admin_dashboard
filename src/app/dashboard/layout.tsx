import React from 'react';
import Sidebar from '../component/dashboard/sidebar/sidebar';
import Navbar from '../component/dashboard/navbar/navbar';

const layout = ({children}) => {
    return (
        <div>
            <div><Sidebar></Sidebar></div>
            <div><Navbar></Navbar>
            {children}
            </div>
        </div>
    );
};

export default layout;