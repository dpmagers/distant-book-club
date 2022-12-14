import React, { useState } from 'react'
import ReviewDetail from "./ReviewDetail"


function ReviewsContainer({reviewList, handleClick, book, deleteReview, editReview, errorList}) {
    return (

        <div className="review-container">
            <img className="book-image" 
                src={book.image} 
                width="300px" 
                height="460px">

            </img>
            <h3 className="book-title"> Title {book.title}</h3>
            <p>Author {book.author}</p>
            <p>Synopsis {book.synopsis}</p>
            <p>{book.average_rating}</p>
            
            <ul className="review-list"></ul>
                {book.reviews ?  book.reviews.map(review => { 
                    return <ReviewDetail key={review.reader_id} 
                    book={book} review={review}  
                    handleClick={handleClick} 
                    deleteReview={deleteReview} 
                    reviewList={reviewList}
                    editReview={editReview}
                    errorList={errorList}
                    />} ) : null}

        </div>
   

    )
    
    }

export default ReviewsContainer