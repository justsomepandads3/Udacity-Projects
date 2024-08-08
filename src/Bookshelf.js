import BookshelfList from "./BookshelfList";
import { Link } from "react-router-dom";

const Bookshelf = ({title, books, id, searchBooks}) =>{ 
  
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
          
        <BookshelfList 
          books={books} 
          id={id} 
          title={title}
          searchBooks={(id==="search" ? [...searchBooks] :"none") }>
        </BookshelfList>
      </div>
      <div className="open-search">
          <Link className="open-search"
                to="/searchPage"
          >Add a book</Link>
      </div>
    </div>

  )
}
export default Bookshelf;