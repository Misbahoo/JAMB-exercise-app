import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {subjects} from './subjectsList';


const Home = () => {

    const theMilli = 7200000;

    localStorage.setItem('twoHours', JSON.stringify(theMilli));

    const [countSelection, setCountSelection] = useState({four : 0, count : ''});
    const [input, setInput] = useState([]);

    const handleClick = (e) => {
            setCountSelection({...countSelection, four : countSelection.four + 1});
            if(countSelection.four >= 3){
                setCountSelection({...countSelection, count: 'disabled'});
            }
    }

    const handleChange = (e) => {

        setInput([...input, e.target.value]);
                    
    }

    const submitSelection = (e) => {
        localStorage.setItem('theInput', JSON.stringify(input));
    }


    return (
        <div className="p-10 w-3/4 mx-auto">
            <div className="p-3 mx-auto">
                <h1 className="text-xl text-gray-500 mx-auto text-center">Select your combination of subjects to begin your exercise</h1>
            </div>
            
    <div  className="flex flex-col w-3/4 mt-8 p-10 mx-auto justify-center shadow-sm shadow-gray-600">
            <p className="mb-5">Note: You can only select Four (4) subjects of your choice</p>
            {subjects.map((item, index) => (
                <div key={index}>
                    <input 
                    type="checkbox" 
                    id={`subject${index}`} value={item} 
                    onChange={handleChange}
                    onClick={handleClick}
                    disabled={countSelection.count}
                    />
                    <label htmlFor="" className="m-5 text-gray-600 capitalize">{item}</label>
                    
                </div>
            
                ))
            }

            {countSelection.count === "disabled" ? <NavLink to="/headOfCategory" className="mt-10 w-2/4 p-3 bg-green-500 rounded-lg text-white hover:bg-blue-500 cursor-pointer" onClick={submitSelection}>Submit</NavLink> : ''}
        </div>

        </div>
    )
}


export default Home;