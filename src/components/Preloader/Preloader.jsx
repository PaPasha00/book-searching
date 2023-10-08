import React from "react";
import preloader from './../../search.gif';
import classes from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={classes.loaderContainer}>
            <img src={preloader} alt="preloader" />
        </div>
    );
}

export default Preloader;