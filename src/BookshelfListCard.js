import * as BooksAPI from "./BooksAPI"


const BookshelfListCard = ({book,bookAuthors,bookImage,bookTitle, searchBooks}) =>{
  //here I refered to the course lesson Hooks 4.5(Perform Side Effects with useEffect) but I didn't use useEffect here
  const updateBookState = (e) =>{
    e.preventDefault();
    const shelf = e.target.value
    const updateSearchBooks = async () => {
      const res = await BooksAPI.update(book,shelf);
    };
    updateSearchBooks();
      
        
  }
  //This piece of code was inspired by sidonaldson here is the link https://stackoverflow.com/questions/38922998/add-property-to-an-array-of-objects
  if(!book.shelf){
    book.shelf="none"
  };

  if(searchBooks!==""){
    //Here I have an issue accessing the array in the normal way, then I found this on redit that fixed the issue
    //https://www.reddit.com/r/learnjavascript/comments/lra9nj/askjs_why_does_this_simple_foreach_give_error/
    //which was simply to replace searchBooks to [...searchBooks]
    
    [...searchBooks].forEach(element => {
      if(element.title===book.title){
        book.shelf=element.shelf
      }
    });
  }
  

  
  return(

    <div className="book">
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
        <div className="book-shelf-changer">{ 
          //Here I got an issue extracting the value the user selected and found the solution from
          //https://stackoverflow.com/questions/53902859/on-submit-form-couldnt-get-react-select-values
          //and it was relplacing the onSubmit to onChange
          <select 
            name={bookTitle} 
            defaultValue={book.shelf} 
            onChange={updateBookState}>
                
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option  value="read">Read</option>
            <option value="none">None</option>
          </select>
              
              
        }
        </div>
      </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
          
    </div>
     
  );
    
};
export default BookshelfListCard;