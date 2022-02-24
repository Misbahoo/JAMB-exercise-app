import React from 'react';
import {
englishOneToTen, 
englishElevenToTwenty,
englishTwentyOneToThirty,
englishThirtyOneToForty,
englishFortyOneToFifty,
englishFiftyOneToSixty,

englishSection1,
englishSection2,
englishSection3,
englishSection4
} from '../questions/english';

export const EnglishOneToTen = ({nextStep}) => {

    let count = 0;
   
    const contee = (e) => {
        e.preventDefault();
        nextStep();
    }

    return (


        <div className="bg-green-200 mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
                        <div className="mb-5 p-3">
                            <p className="uppercase font-bold mb-3">{englishSection1.heading}</p>
                            <p className="italic">{englishSection1.subHeading}</p>
                        </div>
            {englishOneToTen.map((item, index1) => {
                return (
                    <div>

                    <h3><span className="font-bold">Q {count = count+1}:</span> {item.start} <span className="underline">{item.theWord}</span> {item.end}</h3>
                    {item.options.map((item, index) => {
                        return (
                        <div className="mb-3">
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


export const EnglishElevenToTwenty = ({nextStep, prevStep}) => {

    let count = 10;
   
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

                        <div className="mb-5 p-3">
                            <p className="uppercase font-bold mb-3">{englishSection2.heading}</p>
                            <p className="italic">{englishSection2.subHeading}</p>
                        </div>

            {englishElevenToTwenty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {count = count+1}:</span> {item.start} <span className="underline">{item.theWord}</span> {item.end}</h3>
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

export const EnglishTwentyOneToThirty = ({nextStep, prevStep}) => {
   

    let count = 20;
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
                        <div className="mb-5 p-3">
                            <p className="uppercase font-bold mb-3">{englishSection3.heading}</p>
                            <p className="italic">{englishSection3.subHeading}</p>
                        </div>
            {englishTwentyOneToThirty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {count = count+1}:</span> {item.start} <span className="underline">{item.theWord}</span> {item.end}</h3>
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

export const EnglishThirtyOneToForty = ({nextStep, prevStep}) => {
   

    let count = 30;
    const contee = (e) => {
        e.preventDefault();
        nextStep();
    }

       const preStep = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (


        <div className="mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
                        <div className="mb-5 p-3">
                            <p className="uppercase font-bold mb-3">{englishSection4.heading}</p>
                            <p className="italic">{englishSection4.subHeading}</p>
                        </div>
            {englishThirtyOneToForty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {count = count+1}:</span> {item.start} <span className="underline">{item.theWord}</span> {item.end}</h3>
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

export const EnglishFortyOneToFifty = ({nextStep, prevStep}) => {
   

    let count = 40;
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
                        <div className="mb-5 p-3">
                            <p className="uppercase font-bold mb-3">Continuation from Previous Section</p>
                            <p className="italic">The same rule applys as from the previous section</p>
                        </div>
            {englishFortyOneToFifty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {count = count+1}:</span> {item.start} <span className="underline">{item.theWord}</span> {item.end}</h3>
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


export const EnglishFiftyOneToSixty = ({prevStep}) => {
   
    let count = 50;
       const preStep = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (


        <div className="bg-green-200 mx-auto my-10 w-2/4 p-10 shadow-lg shadow-green-500 rounded-lg">
            {englishFiftyOneToSixty.map((item, index1) => {
                return (
                    <div>
                    <h3><span className="font-bold">Q {count = count+1}:</span> {item.start}</h3>
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
            </div>
        </div>
       
    )
}