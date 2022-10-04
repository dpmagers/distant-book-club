import React, { useState, useEffect } from 'react'
import BookDetail from "./BookDetail"

function BookList({bookList}) {
    return (

        <div className="book-container">
            <ul className="book-list"></ul>
                {bookList ?  bookList.map(book => <BookDetail book={book}  /> ) : null}

        </div>

    )
    }

export default BookList