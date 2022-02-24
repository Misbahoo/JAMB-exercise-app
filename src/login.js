import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { participants } from './participants/participants';


const LogIn = () => {


      const [formValue, setFormValue] = useState('');
      const [aNumber, setANumber] = useState(false);
      const [shortString, setShortString] = useState(false);
      const [legit, setLegit] = useState('');
      const [isValidUser, setIsValidUser] = useState(false);

      //Function that handles input from the user
      const handleChange = (e) => {
            const theInput = e.target.value.trim();
            setFormValue(theInput);

            //makes sure the input is only digits
            if (/\D/.test(theInput)) {
                  setANumber(true);
            } else {
                  setANumber(false);
            }


            const theUser = participants.filter((item) => theInput === item.number);
            if (theUser.length > 0) {
                  setIsValidUser(true);
            } else {
                  setIsValidUser(false);
            }
      }


      //Function that validates input from the user
      const validateInput = (e) => {

            e.preventDefault();

            //remove any white space from the input
            const theInput = formValue.trim();

            //check if the input is not less than 6 digits
            if (theInput.length >= 6 && theInput.length <= 11) {
                  //set setShortString to false if the input is of valid length
                  setShortString(false);
                  const theUser = participants.filter((item) => theInput === item.number);
                  if (theUser.length > 0) {
                        setLegit('');
                  } else {
                        setLegit('notFound');
                  }
            } else {
                  //setShortString to true if the input shorter or longer
                  setShortString(true);
            }

      }


      return (
            <div className="flex flex-col w-3/4 mx-auto shadow-sm shadow-gray-700 my-10 p-10 justify-center">
                  <h1 className="text-4xl text-gray-500 text-center my-10">Wecome to JAMB Practice Page</h1>

                  <div className="flex flex-col w-5/6 mx-auto p-3">
                        <div className="mx-auto mb-5">
                              <span className="text-xl text-gray-500">Enter Your Phone number to </span><label htmlFor="" className="font-bold text-green-500 text-xl text-center">Log In</label>
                        </div>
                        <form onSubmit={validateInput} className="mx-auto w-3/4 flex flex-col justify-center">
                              <input type="text" name="login" placeholder="Phone No: 07012345678." className="p-3 w-3/4 mx-auto border border-b-4 border-b-green-500 outline-none rounded-lg" onChange={handleChange} />
                              <p className="text-red-500 w-3/4 mx-auto">{aNumber ? 'Input has to be digits only' : ''}</p>
                              <p className="text-red-500 w-3/4 mx-auto">{shortString ? 'Too short or too long input' : ''}</p>
                              {legit === 'notFound' ? <p className="text-red-500 w-3/4 mx-auto">User not found</p> : ''}
                              {isValidUser ? <NavLink to="/home" className="text-center bg-green-500 text-white p-3 w-2/6 rounded-lg color-white mt-5 mx-auto hover:bg-red-500">Log In</NavLink> : ''}
                        </form>


                  </div>
            </div>
      )
}

export default LogIn;