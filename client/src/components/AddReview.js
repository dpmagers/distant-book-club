import React, { useState} from 'react'

function AddReview({addToReviewList, errors}) {
  const [formData, setFormData] = useState({
    reader_id:'',
    book_id:'',
    comment:'',
    rating:'',
    would_recommend: false,
  })




  function onSubmit(e){
    e.preventDefault()
    const review = {
      reader_id: formData.reader_id,
      book_id: formData.book_id,
      comment: formData.comment,
      rating: formData.rating,
      would_recommend: formData.would_recommend
    }
    addToReviewList(review)
  }
    return (
      <div className="App">
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit}>
       <label>
          Reader id
          <input type="number" value={formData.reader_id} onChange={(e) => setFormData({...formData, reader_id: e.target.value})} />
        </label>
        <br/>
        <label>
        Book id
          <input type="number" value={formData.book_id} onChange={(e) => setFormData({...formData, book_id: e.target.value})} />
        </label>
        <br/>
        <label>
        Comment
          <textarea type="text" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} />
        </label>
        <br/>
        <label>
        Rating
          <input type="number" value={formData.image} onChange={(e) => setFormData({...formData, rating: e.target.value})} />
        </label>
        <br/>
        
        <label> 
                Would Recommend?
                <input 
                type="checkbox"
                value={formData.would_recommend}
                onChange={(e) => setFormData({...formData, rating: e.target.value})}/>
            </label>
        
        <input type="submit" value="Add Review" />


       </form>
      </div>



    );
  }
  
  export default AddReview;