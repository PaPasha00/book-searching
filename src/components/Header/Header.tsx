import React from 'react';
import styles from './Header.module.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getBooksThunk } from '../../redux/booksReducer';
import { CATEGORIES, SORTED } from './HeaderInfo';

const Header = () => {
    const [inputTitle, setInputTitle] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('all');
    const [sorted, setSorted] = useState<string>('relevance');

    const dispatch: any = useDispatch();

    const handleInputChange = (event: any) => {
        setInputTitle(event.target.value);
    };

    const selectCategories = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };
    const selectSorted = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSorted(value);
    };

    const getBooks = () => {
        dispatch(getBooksThunk(inputTitle, selectedOption, sorted))
    };

    return (
        <header className={styles.container}>
            <h1>Поиск книг</h1>
            <div className={styles.inputArea}>
                <input
                    className={styles.inputText}
                    value={inputTitle}
                    onChange={handleInputChange} />
                {
                    inputTitle === ''
                    ? <button className={styles.button} onClick={() => alert('Введите данные поиска')}>Найти</button>
                    : <button className={styles.button} onClick={getBooks}>Найти</button>
                }
                
            </div>

            <div className={styles.selections}>
                <h2>Категории</h2>
                <select onChange={selectCategories} className={styles.inputText}>
                    {
                        CATEGORIES.map(({ position, name }) => (
                            <option key={name} className={styles.black} value={position}>{name}</option>
                        ))
                    }
                </select>

                <h2>Cортировка по</h2>
                <select onChange={selectSorted} className={styles.inputText}>
                    {
                        SORTED.map(({ position, name }) => (
                            <option key={name} className={styles.black} value={position}>{name}</option>
                        ))
                    }
                </select>
            </div>
        </header>
    );
}

export default Header;
