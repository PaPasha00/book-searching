import axios from "axios";

export const getBooksAPI = {
    getBooks(title: string, type: string, order: string) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&printType=${type}&orderBy=${order}&key=AIzaSyDOkVaSryYHm3oFRu_rAVOpWbfJczbz8-Y`)
    },
}