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
         <PageTemplate subjects={subjects}><div>I am maths</div></PageTemplate>
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

    }

     const prevStep = () => {
        const { step } = fields;
        setFields( {step: step - 1} );

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
         <PageTemplate subjects={subjects}><div>I am physics</div></PageTemplate>
     )
}

export const Chemistry = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am chemistry</div></PageTemplate>
     )
}

export const Biology = () => {
     const theValueOfSubjects = localStorage.getItem('subjects');
    console.log(theValueOfSubjects);
    const subjects = JSON.parse(theValueOfSubjects);
     return (
         <PageTemplate subjects={subjects}><div>I am biology</div></PageTemplate>
     )
}

export const Geography = ({location}) => {
     const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am geography</div></PageTemplate>
     )
}

export const Economics = ({location}) => {
   const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am economics</div></PageTemplate>
     )
}

export const Government = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am government</div></PageTemplate>
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
         <PageTemplate subjects={subjects}><div>I am hausa</div></PageTemplate>
     )
}

export const Islamic = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am islamic</div></PageTemplate>
     )
}

export const EnglishLiterature = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am english literature</div></PageTemplate>
     )
}

export const CivilEducation = ({location}) => {
    const {state} = location;
    const {subjects} = state || {};
     return (
         <PageTemplate subjects={subjects}><div>I am civil education</div></PageTemplate>
     )
}