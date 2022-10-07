import React, { useState, useEffect} from 'react'

function EditReview({review=null, editReview}) {

  const [formData, setFormData] = useState({
    reader_id:'',
    book_id:'',
    comment:'',
    rating:'',
    would_recommend: false,
  })
  
  useEffect(() => {
    if (review !=null) {

  setFormData({
    reader_id: review.reader_id,
    book_id: review.book_id,
    comment:review.comment,
    rating: review.rating,
    would_recommend: review.would_recommend
    })}
  },[])

      function onSubmit(e){
        e.preventDefault()
        const reviewinput = {
          reader_id: formData.reader_id,
          book_id: formData.book_id,
          comment: formData.comment,
          rating: formData.rating,
          would_recommend: formData.would_recommend
        }
        editReview(review, reviewinput)
        console.log(review)
      }


    return (
        <div>
            <h2>EDIT YOUR REVIEW</h2>
            <form onSubmit={onSubmit}>
       <label>
          Reader id
          <input type="number" name="reader-id" value={formData.reader_id} onChange={(e) => setFormData({...formData, reader_id: e.target.value})} />
        </label>
        <br/>
        <label>
        Book id
          <input type="number" name="book-id" value={formData.book_id} onChange={(e) => setFormData({...formData, book_id: e.target.value})} />
        </label>
        <br/>
        <label>
        Comment
          <textarea type="text" name="comment" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} />
        </label>
        <br/>
        <label>
        Rating
          <input type="number" name="rating" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} />
        </label>
        <br/>
        
        <label> 
                Would Recommend?
                <input 
                type="checkbox"
                name="would-recommend"
                checked={formData.would_recommend}
                onChange={(e) => setFormData({...formData, would_recommend: e.target.checked})}/>
            </label>
        
        <input type="submit" value="Update Review" />


       </form>
        </div>
    )
}
export default EditReview