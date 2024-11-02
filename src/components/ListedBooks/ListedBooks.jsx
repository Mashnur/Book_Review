import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const ListedBooks = () => {
    const [list,setlist]=useState([])
    useEffect(()=>{
        fetch("list.json")
        .then(res=>res.json())
        .then(data=>setlist(data))
    },[])
    return (
        <div>

           <div>
           <h2 className="text-4xl text-center">Books</h2>
           </div>
           <div className="grid grid-cols-2">
            {
                list.map(book=><Book book={book} key={book.bookId}></Book>)
            }
           </div>
            
        </div>
        
    );
};

export default ListedBooks;