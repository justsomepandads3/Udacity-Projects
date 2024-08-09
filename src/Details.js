import React from "react";
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom"
const Details = (props) =>{
const location = useLocation();

//   const {bookTitle,bookAuthors,bookImage,bookDescription,bookPageCount,bookDateOfPublication}
const bookTitle = location.state.bookTitle;
const bookAuthors = location.state.bookAuthors;
const bookImage = location.state.bookImage;
console.log(bookAuthors)
const bookDescription = location.state.bookDescription;
const bookPageCount = location.state.bookPageCount;
const bookDateOfPublication = location.state.bookDateOfPublication;
  console.log(bookTitle)
    return(
    <div>
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="description">
        
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url("${bookImage}")`,
          }}
              
        ></div>
        </div>
     
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
        <div className="book-description">{bookDescription}</div>
        
        <div className="page-count">Number of Pages: {bookPageCount}</div>
        <div className="page-count">Published in: {bookDateOfPublication}</div>
    </div></div>
  )
}
export default Details;