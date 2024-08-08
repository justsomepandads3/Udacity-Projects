import BookshelfListCard from "./BookshelfListCard";
import PropType from "prop-type";
const BookshelfList = ({books, searchBooks, id},title) =>{
  
  return(
    <ul className="books-grid" key={books.id} >{
      books.map((book) =>(
          //here I stucked because there was a warning about the unique key for the <ul> tag
          //I refered to the official website of react to find the solution since I tried to
          //solve it by inserting the key in <ul> as you see above, the solution was to change\
          //the place of <li> tag from bookshelfListCard and put it here and passing book.id as 
          // a key and it' solved
                
          book.imageLinks && (
            <li key={book.id}>
              <BookshelfListCard 
                book={book} 
                bookTitle={book.title} 
                bookImage={book.imageLinks.thumbnail}
                bookAuthors={book.authors}
                searchBooks={id==="search" ? [...searchBooks] :""}
                
              ></BookshelfListCard>
            </li>)  
            ))
            
        }
    </ul>
    )
}
export default BookshelfList;
BookshelfList.PropType = {
  books: PropType.Array,
  id: PropType.String
}