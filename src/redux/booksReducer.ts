import { getBooksAPI } from "../api/api";

const GET_BOOKS = 'GET_BOOKS';
const GETTING = 'GETTING';

type TState = {
    books: object;
    getting: boolean;
    counter: string;
};

let initialState = {
    books: [],
    getting: false,
    counter: '',
}

let booksReducer = (state: TState = initialState, action: { type: string, data: any, counter: string }) => {

    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.data,
                counter: action.counter
            }
        case GETTING:
            return {
                ...state,
                getting: action.data
            }
        default:
            return state
    }
}

export const getBooksThunk = (title: string, type: string, order: string) => {
    return (dispatch: any) => {
        dispatch({
            type: GETTING,
            data: true
        })
        getBooksAPI.getBooks(title, type, order)
            .then(({ data }: { data: { items: object, totalItems: string } }) => {
                if (data.items) {
                    dispatch(
                        {
                            type: GET_BOOKS,
                            data: data.items,
                            counter: data.totalItems
                        }
                    )
                    dispatch({
                        type: GETTING,
                        data: false
                    })
                } else dispatch({
                    type: GETTING,
                    data: false
                })

            })
    }
}

export default booksReducer;