import React from 'react';
import styles from './OneBook.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOneBookThunk } from '../../redux/booksReducer';
import Preloader from '../Preloader/Preloader';

const OneBook = () => {
    const dispatch: any = useDispatch();
    const oneBook: any = useSelector((store: any) => store.booksData.oneBook);
    const getting: any = useSelector((store: any) => store.booksData.getting);

    let a = window.location.href;
    let url = new URL(a);

    console.log(oneBook);

    useEffect(() => {
        dispatch(getOneBookThunk(url.pathname.slice(13)));
    }, []);

    return (
        <div className={styles.cont}>
            {
                getting
                    ? <Preloader />
                    : <div className={styles.container}>
                        <div>{oneBook.volumeInfo.title}</div>
                        <div>{oneBook.volumeInfo.description}</div>
                        <div>{oneBook.volumeInfo.publisher}</div>
                        <img src={oneBook.volumeInfo.imageLinks.large} alt="book" />
                    </div>
            }</div>

    );
}

export default OneBook;
