import { Link } from "react-router-dom";


const ErorPage = () => {
    return (
        <div>
            <h2>OOPS!!</h2>
            <button ><Link to={'/'}>Go BAck</Link></button>
            
        </div>
    );
};

export default ErorPage;