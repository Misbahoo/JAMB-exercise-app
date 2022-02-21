import React from 'react';
import {NavLink} from 'react-router-dom';



const HeaderOfCategory = () => {

    const theInput = localStorage.getItem('theInput');

    const subjects = JSON.parse(theInput);


    const [s1, s2, s3, s4] = subjects;
    const routesVariabele = subjects.map((item) => {
        
        return "/" + item.replace(/\s/g, '');
    });

    const [r1, r2, r3, r4] = routesVariabele;
    const styles = { 
        backgroundColor: "#BBF7D0",
        color: "#000"
    }

    return (
       <div className="flex flex-row gap-3 w-3/4 mx-auto justify-center">
            <NavLink to={{pathname: r1, state : {subjects}}} activeStyle={styles} className="p-3 rounded-lg shadow-sm shadow-green-600 mt-10 hover:bg-green-200 capitalize">{s1}</NavLink>
            <NavLink to={{pathname: r2, state : {subjects}}} activeStyle={styles} className="p-3 rounded-lg shadow-sm shadow-green-600 mt-10 hover:bg-green-200 capitalize">{s2}</NavLink>
            <NavLink to={{pathname: r3, state : {subjects}}} activeStyle={styles} className="p-3 rounded-lg shadow-sm shadow-green-600 mt-10 hover:bg-green-200 capitalize">{s3}</NavLink>
            <NavLink to={{pathname: r4, state : {subjects}}} activeStyle={styles} className="p-3 rounded-lg shadow-sm shadow-green-600 mt-10 hover:bg-green-200 capitalize">{s4}</NavLink>
       </div>
    )
}

export default HeaderOfCategory;