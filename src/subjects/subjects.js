import React, {useState} from 'react';
import {
MathsOneToTen,
MathsElevenToTwenty,
MathsTwentyOneToThirty,
MathsThirtyOneToForty
} from '../theQuestionsSteps/mathsForm';

import {
EnglishOneToTen,
EnglishElevenToTwenty,
EnglishTwentyOneToThirty,
EnglishThirtyOneToForty,
EnglishFortyOneToFifty,
EnglishFiftyOneToSixty
} from '../theQuestionsSteps/englishForm';

import PageTemplate from "../pageTemplate";



export const Mathematics = ({location}) => {

        const {state} = location;
        const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
             <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
        </PageTemplate>
     )
}

export const English = () => {

  const theValueOfSubjects = localStorage.getItem('subjects');
    const subjects = JSON.parse(theValueOfSubjects);
    
    const [fields, setFields] = useState({
        step: 1,
    });

    const { step } = fields;

        const nextStep = () => {
        const { step } = fields;
        setFields( {step : step + 1} );
        window.scrollTo(0,0);

    }

     const prevStep = () => {
        const { step } = fields;
        setFields( {step: step - 1} );
        window.scrollTo(0,0);


    }
    
    switch(step) {
        case 1:
            return (
                <PageTemplate subjects={subjects}>
                <EnglishOneToTen
                nextStep={nextStep}
                />
                </PageTemplate>
            );
        case 2:
            return (
                <PageTemplate subjects={subjects}>
                <EnglishElevenToTwenty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        case 3: 
               return (
                <PageTemplate subjects={subjects}>
                <EnglishTwentyOneToThirty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        case 4: 
               return (
                <PageTemplate subjects={subjects}>
                <EnglishThirtyOneToForty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        case 5: 
               return (
                <PageTemplate subjects={subjects}>
                <EnglishFortyOneToFifty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        case 6: 
               return (
                <PageTemplate subjects={subjects}>
                <EnglishFiftyOneToSixty
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        default:
            return <h1>Error page not found</h1>
    }
        
}

export const Physics = ({location}) => {
     const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const Chemistry = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
               <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const Biology = () => {
     const theValueOfSubjects = localStorage.getItem('subjects');
    console.log(theValueOfSubjects);
    const subjects = JSON.parse(theValueOfSubjects);
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const Geography = ({location}) => {
     const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const Economics = ({location}) => {
   const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const Government = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const History = () => {

    const theValueOfSubjects = localStorage.getItem('subjects');
    const subjects = JSON.parse(theValueOfSubjects);
    
    const [fields, setFields] = useState({
        step: 1,
    });

    const { step } = fields;

        const nextStep = () => {
        const { step } = fields;
        setFields( {step : step + 1} );

    }

     const prevStep = () => {
        const { step } = fields;
        setFields( {step: step - 1} );

    }
    
    switch(step) {
        case 1:
            return (
                <PageTemplate subjects={subjects}>
                <MathsOneToTen
                nextStep={nextStep}
                />
                </PageTemplate>
            );
        case 2:
            return (
                <PageTemplate subjects={subjects}>
                <MathsElevenToTwenty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        case 3: 
               return (
                <PageTemplate subjects={subjects}>
                <MathsTwentyOneToThirty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        case 4: 
               return (
                <PageTemplate subjects={subjects}>
                <MathsThirtyOneToForty
                nextStep={nextStep}
                prevStep={prevStep}
                />
                </PageTemplate>
            );
        default:
            return <h1>Error page not found</h1>
    }
        
}

export const Hausa = ({location}) => {
   const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const Islamic = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const EnglishLiterature = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}

export const CivilEducation = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}>
              <div className="flex flex-col gap-3 mx-auto w-3/4 h-full mt-5 p-3">
                 <h1 className="text-3xl text-gray-600">This subject is not available yet.</h1>
                 <h1 className="text-gray-600 text-2xl">Please try again later</h1>
             </div>
         </PageTemplate>
     )
}