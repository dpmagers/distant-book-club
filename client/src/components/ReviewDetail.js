import React, {useState} from 'react'

const ReviewDetail = ({book, review, deleteReview, id}) => {

    const handleClick = () => {
        deleteReview(id)
    }


    return (
        <div className="review-detail">

            <p> Name {review.name}</p>
            <p> Favorite Book {review.favorite_book}</p>
            <p>Comment {review.comment}</p>
            <p>Rating {review.rating}</p>
            <p>Recommend? {review.would_recommend ? "Yes" : "No" }</p> 
            <button onClick={handleClick} className='delete'>
                <p className="delete">X</p>
            </button>

        </div>



    )
}
export default ReviewDetail