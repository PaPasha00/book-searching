import BookCard from '../BookCard/BookCard';
import styles from './Screen.module.css';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { getMoreBooksThunk } from '../../redux/booksReducer';
import { useDispatch } from 'react-redux';

const Screen = () => {
    const { books, getting, counter } = useSelector((store: any) => store.booksData);
    const { title, type, order } = useSelector((store: any) => store.booksData.searchParams);
    const { startIndex, maxResults } = useSelector((store: any) => store.booksData);

    const dispatch: any = useDispatch();

    console.log(books);
    

    const getMoreBooks = () => {
        dispatch(getMoreBooksThunk(title, type, order, startIndex, maxResults))
    }

    return (
        <>
            {
                getting
                    ? <Preloader />
                    : <div className={styles.container}>
                        <h1>{counter} результатов</h1>
                        <div className={styles.booksContainer}>
                            {
                                books.map((book: any, index: number) => (
                                    <BookCard
                                        key={index}
                                        fullData={book}
                                        title={book.volumeInfo.title}
                                        authors={book.volumeInfo.authors}
                                        smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                                        categories={book.volumeInfo.categories}
                                        id={book.id}
                                    />
                                    
                                ))
                            }
                        </div>
                        {
                                title
                                ? <button onClick={() => getMoreBooks()}>Еще книги</button>
                                : <></>
                            }
                    </div>
            }
        </>

    );
}

export default Screen;