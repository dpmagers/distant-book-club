// import './App.css';
import NavBar from "./components/NavBar"
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"
import LoginForm from "./components/LoginForm"

import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  const [reader, setReader] = useState(null)
  const [page, setPage] = useState("/")
  const [bookList, setBookList] = useState("")


    useEffect(() => {
      fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(setBookList)
    },[])


    const checkDuplicate = (addedBook) => {
      const isDuplicate = bookList.some(book => {
        if (book.title === addedBook.title) {
          return true;
        }
        return false;
      });
        return isDuplicate
      }
  
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
            <BookList bookList={bookList}/>
          </Route>
          <Route path="/bookdiscussion">
            <h1>BOOK DISCUSSION</h1>
          </Route>
          <Route path="/">
            <LoginForm reader={reader} setReader={setReader}/>
            {/* <h1>Page Counter:</h1> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
