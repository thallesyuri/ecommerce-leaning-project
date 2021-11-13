import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from 'react-router';

//Importing the access to router control inside this component

//Finally accessing the history inside the props of react-router-dom
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    return (
        //Pushing the link for the other page in the router --
        <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

//This will give the power to the component of access the others routes
export default MenuItem;
