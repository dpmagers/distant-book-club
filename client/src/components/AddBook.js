import React, { useState} from 'react'

function AddBook({addToBookList, errors}) {
  const [formData, setFormData] = useState({
    title:'',
    author:'',
    synopsis:'',
    image:''
  })


  function onSubmit(e){
    e.preventDefault()
    const book = {
      title: formData.title,
      author: formData.author,
      synopsis: formData.synopsis,
      image: formData.image,
    }
    addToBookList(book)
  }
    return (
      <div className="App">
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit}>
       <label>
          Title
          <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
        </label>
        <br/>
        <label>
        Author
          <input type="text" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} />
        </label>
        <br/>
        <label>
        Synopsis
          <textarea type="text" value={formData.synopsis} onChange={(e) => setFormData({...formData, synopsis: e.target.value})} />
        </label>
        <br/>
        <label>
        Image
          <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
        </label>
        <br/>
        <input type="submit" value="Add Book" />
       </form>
      </div>
    );
  }
  
  export default AddBook;