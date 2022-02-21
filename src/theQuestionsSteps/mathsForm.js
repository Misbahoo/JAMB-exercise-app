import React from 'react';
import {
mathsOneToTen, 
mathsElevenToTwenty,
mathsTwentyOneToThirty,
mathsThirtyOneToForty
} from '../questions/mathematics';

export const MathsOneToTen = ({nextStep}) => {
   
    const contee = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (


        <div className="bg-green-200 mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
            {mathsOneToTen.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {index1+1}:</span> {item.question}</h3>
                    {item.options.map((item, index) => {
                        return (
                        <div>
                            <input type="radio" name={`math${index1}`} value={item.a}/>
                            <label htmlFor=""> {item.a}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.b}/>
                            <label htmlFor=""> {item.b}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.c}/>
                            <label htmlFor=""> {item.c}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.d}/>
                            <label htmlFor=""> {item.d}</label>
                        </div>
                            )
                    })}
                    </div>
                )
            })}

            <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={contee}>Next</button>
        </div>
       
    )
}


export const MathsElevenToTwenty = ({nextStep, prevStep}) => {
   
    const contee = (e) => {
        e.preventDefault();
        nextStep();
    }

    const preStep = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (


        <div className="bg-green-200 mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
            {mathsElevenToTwenty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {index1+1}:</span> {item.question}</h3>
                    {item.options.map((item, index) => {
                        return (
                        <div>
                            <input type="radio" name={`math${index1}`} value={item.a}/>
                            <label htmlFor=""> {item.a}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.b}/>
                            <label htmlFor=""> {item.b}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.c}/>
                            <label htmlFor=""> {item.c}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.d}/>
                            <label htmlFor=""> {item.d}</label>
                        </div>
                            )
                    })}
                    </div>
                )
            })}

            <div className="flex flex-row">
                <div className="flex flex-1 justify-start">
                     <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={preStep}>Previous</button>
                 </div>

                  <div className="flex flex-1 justify-end">   
                        <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={contee}>Next</button>
                </div>
            </div>
           
        </div>
       
    )
}

export const MathsTwentyOneToThirty = ({nextStep, prevStep}) => {
   
    const contee = (e) => {
        e.preventDefault();
        nextStep();
    }

       const preStep = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (


        <div className="bg-green-200 mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
            {mathsTwentyOneToThirty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {index1+1}:</span> {item.question}</h3>
                    {item.options.map((item, index) => {
                        return (
                        <div>
                            <input type="radio" name={`math${index1}`} value={item.a}/>
                            <label htmlFor=""> {item.a}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.b}/>
                            <label htmlFor=""> {item.b}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.c}/>
                            <label htmlFor=""> {item.c}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.d}/>
                            <label htmlFor=""> {item.d}</label>
                        </div>
                            )
                    })}
                    </div>
                )
            })}

              <div className="flex flex-row">
                <div className="flex flex-1 justify-start">
                     <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={preStep}>Previous</button>
                 </div>

                  <div className="flex flex-1 justify-end">   
                        <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={contee}>Next</button>
                </div>
            </div>
        </div>
       
    )
}

export const MathsThirtyOneToForty = ({nextStep, prevStep}) => {
   
    const contee = (e) => {
        e.preventDefault();
        nextStep();
    }

       const preStep = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (


        <div className="bg-green-200 mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
            {mathsThirtyOneToForty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {index1+1}:</span> {item.question}</h3>
                    {item.options.map((item, index) => {
                        return (
                        <div>
                            <input type="radio" name={`math${index1}`} value={item.a}/>
                            <label htmlFor=""> {item.a}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.b}/>
                            <label htmlFor=""> {item.b}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.c}/>
                            <label htmlFor=""> {item.c}</label>
                            <br />
                            <input type="radio" name={`math${index1}`} value={item.d}/>
                            <label htmlFor=""> {item.d}</label>
                        </div>
                            )
                    })}
                    </div>
                )
            })}

              <div className="flex flex-row">                 
                 <div className="flex flex-1 justify-start">
                     <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={preStep}>Previous</button>
                 </div>

                  <div className="flex flex-1 justify-end">   
                        <button className="bg-green-500 text-white p-3 mt-10 rounded-lg shadow-sm shadow-pink-600" onClick={contee}>Next</button>
                </div>
            </div>
        </div>
       
    )
}