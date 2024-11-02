import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
   const books=useLoaderData();
   const{bookId}=useParams();
   const idInt=parseInt(bookId)
   const book=books.find(book=>book.bookId==idInt)
   console.log(book)

    
    return (
        <div>
            {/* <h3>Book details of</h3>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:grid-col-span-3">

                </div>
                <div className="border">

                </div> */}
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={book.image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{book.category}</h1>
      <p className="py-6">
        Review: {book.review}
        <h3>Tags: <button className="text-green-300 gap-4 border-rounded  mr-3 font-extrabold px-5 py-5">{book.tags}</button></h3>
      </p>
      <li type="none">Number of pages:{book.totalPages}</li>
      <li type="none">year of publishing:{book.yearOfPublishing}</li>
      <li type="none">Publisher:{book.publisher}</li>
      <li type="none">Rating:{book.rating}</li>
      <div className="gap-8 rounded-full">
      <button className="px-5 py-2 font-extrabold border-rounded bg-green-600">Read</button>
        <button className="px-5 py-2 font-extrabold bg-blue-300">WishList</button>
      </div>
    </div>
  </div>
</div>
        
            
            
        </div>
    );
};

export default BookDetails;