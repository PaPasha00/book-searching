import booksReducer, { TState } from "../booksReducer";

// let state: TState;

// beforeEach(() => {
//     state = {
//         books: [{}, {}],
//         getting: false,
//         counter: 0,
//         startIndex: 0,
//         maxResults: 30,
//         searchParams: {},
//         oneBook: {},
//     }
// })

it('gettingInfoFalse', () => {
    let state: TState = {
        books: [{}, {}],
        getting: false,
        counter: 0,
        startIndex: 0,
        maxResults: 30,
        searchParams: {},
        oneBook: {},
    }

    const newState = booksReducer(state, { type: 'GETTING', data: false })
    expect(newState.getting).toBeFalsy();
})

// it('gettingInfoTrue', () => {
//     const newState = booksReducer(state, { type: 'GETTING', data: true })
//     expect(newState.getting).toBeTruthy();
// })
