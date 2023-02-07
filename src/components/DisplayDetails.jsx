import React from 'react';

export default function DisplayDetails(props){

    const {detailsObj : details} = props;
    return <div className='details-card'>
        <h1>Personal Details</h1>
        <p>Name: {details.name}</p>
        <p>Age: {details.age}</p>
        <p>Qualifications: {details.degree}</p>
    </div>
}