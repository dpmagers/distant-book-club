import React, {useState} from 'react'

const ReviewDetail = ({book, review, reviewList, deleteReview, id, editReview}) => {

    const handleClick = (review) => {
        deleteReview(review.id)
        // console.log(review)
    }

    const handleEditReview = (review) => {
        editReview(review.id)
        console.log(review)
    }


    

    return (
        <div className="review-detail">

            <p> Name {review.name}</p>
            <p> Favorite Book {review.favorite_book}</p>
            <p>Comment {review.comment}</p>
            <p>Rating {review.rating}</p>
            <p>Recommend? {review.would_recommend ? "Yes" : "No" }</p> 
            <button onClick={() => handleEditReview(review)} className='delete'>
                <p className="delete">UPDATE</p>
            </button>
            <button onClick={() => handleClick(review)} className='delete'>
                <p className="delete">X</p>
            </button>

        </div>



    )
}
export default ReviewDetail