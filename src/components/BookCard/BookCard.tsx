import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({fullData, title, authors, smallThumbnail, categories}: {fullData: {}, title: string, authors: [], smallThumbnail: string, categories: string}) => {
    console.log('a');
    
    return (
        <div className={styles.container}>
            <img src={smallThumbnail} alt='title'/>
            <span className={styles.tag}>{categories}</span>
            <span className={styles.name}>{title}</span>
            {
                authors
                ? authors.map(name => (
                    <span key={name}>{name}</span>
                ))
                : 'Автор неизвестен'
            }
        </div>
    );
}

export default BookCard;
