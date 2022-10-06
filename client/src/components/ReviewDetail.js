import React, {useState} from 'react'
import EditReview from './EditReview'

const ReviewDetail = ({book, review, deleteReview, editReview}) => {
    const [clickEdit, setClickEdit] = useState(false)

    const handleClick = (review) => {
        deleteReview(review.id)
        // console.log(review)
    }

    //originally handleEditReview
    const handleEditReview = (review) => {
        // editReview(review.id)
        setClickEdit(!clickEdit)
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
            {/* if clickEdit is true render editReview component; pass down data into form // if not null null */}
            {clickEdit ? <EditReview review={review} editReview={editReview} /> : null}
            
            <button onClick={() => handleClick(review)} className='delete'>
                <p className="delete">X</p>
            </button>

        </div>



    )
}
export default ReviewDetail