
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="Image/images1.jpg"
      
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <Link to={'/Listed'}>
      <button className='bg-green-400'>View the list</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;