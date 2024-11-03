import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);

    const book = books.find(book => book.bookId === idInt);
    console.log(book);

    // State to track if the book has been read
    const [isRead, setIsRead] = useState(false);

    const handleReadClick = () => {
        if (isRead) {
            toast("Already read!");
        } else {
            toast("Read!");
            setIsRead(true); // Mark as read
        }
    };

    const handleWishListClick = () => {
        if (isRead) {
            toast("Already read!");
        } else {
            toast("Added to wishlist");
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{book.category}</h1>
                    <p className="py-6">
                        Review: {book.review}
                        <h3>Tags: <button className="text-green-300 gap-4 border-rounded  mr-3 font-extrabold px-5 py-5">{book.tags}</button></h3>
                    </p>
                    <li type="none">Number of pages: {book.totalPages}</li>
                    <li type="none">Year of publishing: {book.yearOfPublishing}</li>
                    <li type="none">Publisher: {book.publisher}</li>
                    <li type="none">Rating: {book.rating}</li>
                    <div className="gap-8 rounded-full">
                        <button onClick={handleReadClick} className="px-5 py-2 font-extrabold border-rounded bg-green-600">Read</button>
                        <button onClick={handleWishListClick} className="px-5 py-2 font-extrabold bg-blue-300">WishList</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
