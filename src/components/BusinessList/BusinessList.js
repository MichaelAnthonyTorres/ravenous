import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function BusinessList(){
    return( 
    <div className='businessList'>
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business /> 
    </div>
 
    )
}

export default BusinessList