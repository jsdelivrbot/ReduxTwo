
// selectBook is an ActionCreator and needs to return an Action (object)
export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}