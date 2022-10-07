import React, {useState} from 'react'
import EditReview from './EditReview'

const ReviewDetail = ({book, review, deleteReview, editReview, errorList}) => {
    const [clickEdit, setClickEdit] = useState(false)

    console.log("is", errorList)
    console.log(review)
    const errors = errorList.filter(err => err?.id === review.id)
   console.log("errors", errors)


    const handleClick = (review) => {
        deleteReview(review.id)

    }

    const handleEditReview = (review) => {
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
            
            {/* {displayItem.id === currentUser.id && !isEditing ? <div>
            <button></button>
            <button></button>
            </div> : null} */}
            
            
            <button onClick={() => handleEditReview(review)} className='delete'>
                <p className="delete">UPDATE</p>
            </button>

            {clickEdit ? <EditReview review={review} editReview={editReview} /> : null}
            
            <button onClick={() => handleClick(review)} className='delete'>
                <p className="delete">X</p>
            </button>
            <div>
                {errors && errors?.map((err) => <p>{err?.message} </p>)}
            </div>

        </div>



    )
}
export default ReviewDetail