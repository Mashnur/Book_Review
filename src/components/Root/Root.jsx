import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>

            </div>
           
            
        </div>
    );
};

export default Root;