import {Link} from 'react-router-dom';
import React, {useState} from 'react';


const Header = ({location}) => {

    const [isLogedIn, setIsLogedIn] = useState(false);
    let theValue = "Login"

    const changeValue = () =>{
        if(isLogedIn === false) {
            setIsLogedIn(true);
            theValue = "Logout";
        }else if(isLogedIn === true) {
            setIsLogedIn(false);
            theValue = "Login";
        }     
    }
   
    return (
            <div className="shadow-lg pb-5">
                <nav className="flex flex-row mt-5 w-3/4 mx-auto">
                    <div className={"flex flex-1 justify-start"}>
                        <Link to="/home"  className={"p-3 mx-5 text-white bg-blue-600 rounded-lg shadow-sm shadow-pink-600 hover:bg-blue-900"}>Menu</Link>
                    </div>
                    <div className={"flex flex-1 justify-end"}>
                        <Link to="/" className={"p-3 mx-5 text-white bg-blue-600 rounded-lg shadow-sm shadow-pink-600 hover:bg-blue-900"} onClick={changeValue}>{theValue}</Link>
                    </div>
                </nav>
            </div>
            
    )
}

export default Header;