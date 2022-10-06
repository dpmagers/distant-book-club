// import './App.css';
import NavBar from "./components/NavBar"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import ReviewsContainer from "./components/ReviewsContainer"
import AddReview from "./components/AddReview"




import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";


function App() {

  const [reader, setReader] = useState(null)
  const [page, setPage] = useState("/")
  const [bookList, setBookList] = useState([])
  const [reviewList, setReviewList] = useState([])

  const [book, setBook] = useState([])
    // GET BOOKS
    useEffect(() => {
      fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(setBookList)
    },[])

    // GET REVIEWS
    useEffect(() => {
      fetch("http://localhost:4000/reviews")
      .then(res => res.json())
      .then(setReviewList)
    },[])

    // POST BOOK
    const checkDuplicate = (addedBook) => {
      const isDuplicate = bookList.some(book => {
        if (book.title === addedBook.title) {
          return true;
        }
        return false;
      });
        return isDuplicate
      }
  
      // POST BOOK 
    const addToBookList = (addedBook) => {
     if (checkDuplicate(addedBook)) {
      return null
     } else {
      
          fetch("http://localhost:4000/books",{
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
          },
          body: JSON.stringify(addedBook),
        })    
          .then(resp => resp.json())
          .then(newBook => setBookList([...bookList, newBook]))
        }
      }

      // POST REVIEW
      const addToReviewList = (addedReview) => {
         
        fetch("http://localhost:4000/reviews",{
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(addedReview),
        })    
        .then(resp => resp.json())
        .then(newReview => setReviewList([...reviewList, newReview]))
      }
         

      // GET Book w/nested reviews
      const handleClick = (e) => {
          fetch(`http://localhost:4000/books/${e.id}`)
          .then(res => res.json())
          .then(book => setBook(book))
          // history.push(`/bookdiscussion`)

    }
    // DELETE review
    const deleteReview = (e) => {
      fetch(`http://localhost:4000/reviews/${e}`, {
        method: "DELETE",
      })
        .then(() => {const data = reviewList.filter(i => i.id !== e)
          setReviewList(data)})
      
      // console.log(e)
    }

    const editReview = (review, reviewinput) => {
      console.log("hello")

      setReviewList(reviewList => reviewList.map(originalReview => {
            if (originalReview.id === review.id) {
              return review;
            } else {
              return originalReview;
            }
          }))
          console.log(review)
          console.log(reviewinput)
      fetch(`http://localhost:4000/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewinput),
      })
      .then((resp) => resp.json())
      .then((updatedReview) => {
        setReviewList([...reviewList, updatedReview]);
      });
      // console.log()
            //   // history.push("/bookdiscussion")

    }
  
  



  return (
    <div className="App">
      <header><h1 className="sitehead">Distant Book Club</h1></header>
        <BrowserRouter>
        <NavBar onChangePage={setPage} setReader={setReader} />
  
      <div className="App">

        <Switch>
        <Route path="/addbook">
            <h1>ADD BOOK</h1>
            <AddBook addToBookList={addToBookList}/>
          </Route>
          <Route path="/booklist">
            <h1>BOOK LIST</h1>
            {/* <AddBook addToBookList={addToBookList}/> */}
            <BookList bookList={bookList} handleClick={handleClick}/>
          </Route>
          <Route path="/bookdiscussion">
            <h1>BOOK DISCUSSION</h1>
            {/* <AddReview addToReviewList={addToReviewList}/> */}
            <ReviewsContainer book={book} deleteReview={deleteReview} editReview={editReview} />
          </Route>
          <Route path="/writereview">
            <h1>WRITE A REVIEW</h1>
            <AddReview addToReviewList={addToReviewList}/>
            {/* <EditReview editReview={editReview}/> */}
          </Route>
          <Route path="/">
            <LoginForm reader={reader} setReader={setReader}/>
            <SignUpForm reader={reader} setReader={setReader}/>
            {/* <h1>Page Counter:</h1> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
