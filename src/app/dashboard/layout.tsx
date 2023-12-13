import React from 'react';
import Sidebar from '../component/dashboard/sidebar/sidebar';
import Navbar from '../component/dashboard/navbar/navbar';

const layout = ({children}) => {
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-1 bg-slate-800'><Sidebar></Sidebar></div>
            <div className='col-span-4'><Navbar></Navbar>
            {children}
            </div>
        </div>
    );
};

export default layout;