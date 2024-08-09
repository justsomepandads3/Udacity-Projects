import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Bookshelf from "./Bookshelf"
import * as BooksAPI from "./BooksAPI"
import SearchPage from "./SearchPage";
import Details from "./Details"
function App() {
  const [books, setBooks] = useState([])
  
  
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  },[books]);

  
  const checkinStatus = (id) =>{
    const selectedBooks = []
      books.forEach((element) =>{
        if (element.shelf===id){selectedBooks.push(element);}})
    return selectedBooks;
  }
  
  
  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Routes >
        <Route 
          exact path={'/'} 
          element={
            <div>
            
              <Bookshelf 
              books={checkinStatus("currentlyReading")} 
              title="Currently Reading" 
              >
              </Bookshelf>

              <Bookshelf 
              books={checkinStatus("wantToRead")} 
              title="Want To Read" 
              >
            
              </Bookshelf>

              <Bookshelf 
              books={checkinStatus("read")} 
              title="Read" 
              >
            
              </Bookshelf> 

            </div>
          }
        ></Route>
        <Route 
          path="/searchPage" 
          element={
            <SearchPage 
              books={books} >
            </SearchPage>}
        ></Route>
        <Route path="/details" element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;