import React, {useState} from 'react'

const BookDetail = ({book, handleClick}) => {



    return (
        <div className="book-detail">
            <img className="book-image" 
                src={book.image} 
                width="300px" 
                height="460px"
                onClick={() => handleClick(book)}>

            </img>
            <h3 className="book-title"> Title {book.title}</h3>
            <p>Author {book.author}</p>
            <p>Synopsis {book.synopsis}</p>

        </div>

    )
}

export default BookDetail