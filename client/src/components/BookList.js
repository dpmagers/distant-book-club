import React, { useState, useEffect } from 'react'
import BookDetail from "./BookDetail"

function BookList({bookList, handleClick}) {
    return (

        <div className="book-container">
            <ul className="book-list"></ul>
                {bookList ?  bookList.map(book => <BookDetail key={book.id} book={book} handleClick={handleClick}  /> ) : null}

        </div>

    )
    }

export default BookList