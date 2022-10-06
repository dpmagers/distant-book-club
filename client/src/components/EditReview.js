import React, { useState} from 'react'


function EditReview({editReview}) {
    // const { id } = useParams();
    // const history = useHistory()

    // FROM ADDREVIEW
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
        // addToReviewList(review)


        
        // DAKOTA EXAMPLE 
        // const initialState = {
        //     name: "",
        //     about: "",
        //     phase: "",
        //     link: "",
        //     image: "",
        //   };
        //   const ProjectEditForm = ({ onUpdateProject }) => {
        //     const [formData, setFormData] = useState(initialState);
          
        //     const { name, about, phase, link, image } = formData;
          
        //     const { id } = useParams();
        //     const history = useHistory()
        //     console.log('id', id)
          
          
        //     useEffect(() => {
        //       fetch(`http://localhost:4000/projects/${id}`)
        //         .then((res) => res.json())
        //         .then((project) => setFormData(project));
        //     }, [id]);
          
        //     const handleChange = (e) => {
        //       const { name, value } = e.target;
        //       setFormData(formData => ({ ...formData, [name]: value }));
        //     };
          
        //     const handleSubmit = (e) => {
        //       e.preventDefault();
        //       const configObj = {
        //         method: "PATCH",
        //         headers: {
        //           "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(formData),
        //       };
          
        //       fetch(`http://localhost:4000/projects/${id}`, configObj)
        //         .then((resp) => resp.json())
        //         .then((updatedProj) => {
        //           onUpdateProject(updatedProj);
        //           history.push("/projects")
        //         });
        //     };





    }
    return (
        <div>
            <h2>EDIT YOUR REVIEW</h2>
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
    )
}
export default EditReview