import React from 'react';
import {Link} from 'react-router-dom';



const Menu = () => {

    return (
       <div className="flex flex-row gap-3 w-3/4 mx-auto justify-center">
            <Link to="/" className="p-3 rounded-lg hover:text-white bg-blue-100 mt-10 hover:bg-blue-500">Menu</Link>
            <Link to="social" className="p-3 rounded-lg hover:text-white bg-blue-100 mt-10 hover:bg-blue-500">Social Sciences</Link>
            <Link to="art" className="p-3 rounded-lg hover:text-white bg-blue-100 mt-10 hover:bg-blue-500">Art</Link>
            <Link to="pure" className="p-3 rounded-lg hover:text-white bg-blue-100 mt-10 hover:bg-blue-500">Pure Sciences</Link>
            <Link to="signup" className="p-3 rounded-lg hover:text-white bg-blue-100 mt-10 hover:bg-blue-500">SignUps</Link>
       </div>
    )
}

export default Menu;