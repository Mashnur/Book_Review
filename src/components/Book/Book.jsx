import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    const {bookName , image ,author,rating ,bookId}=book
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <div className="text-green-400 gap-8 rounded-full">
        <button className="px-5 py-2 font-extrabold border-rounded">Young Adult</button>
        <button className="px-5 py-2 font-extrabold">Identity</button>
    </div>
    <h2 className="card-title font-extrabold">{bookName}</h2>
    <p>By:{author}</p>
    <div className="card-actions">
      <Link to={`/book/${bookId}`}>
      <button  className="bg-green-400 text-black border-rounded">View Details</button>
      </Link>
    </div>
    <div>
      <h2 className="flex mr-4 justify-between">Fiction<FcRating className="mr-2"></FcRating>{rating}</h2>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;