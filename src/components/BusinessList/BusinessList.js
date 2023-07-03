import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function BusinessList(props){
    return( 
    <div className='businessList'>
        {
            props.businesses.map(business => <Business business={business} key={business.name}/>)
        } 
    </div>
 
    )
}

export default BusinessList