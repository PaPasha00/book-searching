import styles from './OneBook.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOneBookThunk } from '../../redux/booksReducer';
import Preloader from '../Preloader/Preloader';
import { motion } from 'framer-motion';

const OneBook = () => {
    const dispatch: any = useDispatch();
    const oneBook: any = useSelector((store: any) => store.booksData.oneBook);
    const getting: boolean = useSelector((store: any) => store.booksData.getting);

    let a = window.location.href;
    let url = new URL(a);

    useEffect(() => {
        dispatch(getOneBookThunk(url.pathname.slice(13)));
    }, []);

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { duration: 1.5 }
        },
    }

    return (
        <div className={styles.cont}>
            {
                getting
                    ? <Preloader />
                    : <motion.div className={styles.container}
                        variants={containerVariants}
                        initial='hidden' animate='visible'>
                        <img src={oneBook.volumeInfo?.imageLinks?.smallThumbnail} alt="book" />

                        <div className={styles.infoContainer}>
                            <h1>{oneBook.volumeInfo?.title}</h1>
                            <p>{oneBook.volumeInfo?.description}</p>
                            <p>{oneBook.volumeInfo?.publisher}</p>
                            <p>{oneBook.volumeInfo?.authors}</p>
                        </div>
                    </motion.div>
            }</div>

    );
}

export default OneBook;
