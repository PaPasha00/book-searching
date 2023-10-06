import BookCard from '../BookCard/BookCard';
import styles from './Screen.module.css';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';

const Screen = () => {
    const { books, getting } = useSelector((store: any) => store.booksData);

    console.log(books);
    

    return (
        <>
            {
                getting
                    ? <Preloader />
                    : <div className={styles.container}>
                        {
                            books.map((book: any) => (
                                <BookCard
                                    key={book.volumeInfo.title}
                                    fullData={book}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                                    categories={book.volumeInfo.categories}
                                />
                            ))
                        }
                    </div>
            }
        </>

    );
}

export default Screen;