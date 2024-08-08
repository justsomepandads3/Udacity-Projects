import { Link } from "react-router-dom";
import BookshelfList from "./BookshelfList";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI"
import { useDebounce } from "use-debounce";

const SearchPage = ({books}) =>{
  
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([])
  const [BookNotFound, setBookNotFound] = useState(false)
  const updateQuery = (query) =>{
    setQuery(query);
  }
  //This piece of code was inspired by Cand Dev https://www.youtube.com/watch?v=nwJQBDPfGEk&t=659s
  const [debounceQuery] = useDebounce(query, 500)
  useEffect(() =>{
    if(debounceQuery===""){
      setSearchBooks([])
      setBookNotFound(false)
      return; 
    }
    else{
     const getSearchBooks = async () => {
        const res = await BooksAPI.search(debounceQuery,1);
        if(res.error!=="empty query"){
          setSearchBooks(res);
          setBookNotFound(false)
        }
        else{
          setBookNotFound(true)
        }}
    getSearchBooks()
  }},[debounceQuery]);
  // End------------------------------------------------------------------------------
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) =>updateQuery(event.target.value)}
            />
        </div>
      </div>
              
      {!BookNotFound ?  
        (<div className="search-books-results">
          <BookshelfList books={searchBooks} searchBooks={[...books]} id="search"></BookshelfList>
        </div>) : <h2 className="book-not-found">Book not found</h2>}
                
              
              
    </div>
          
  );
};
export default SearchPage;