import React, {useState} from 'react';
import OneToTen from './questionOneToFive';
import ElevenToTwenty from './questionSixToTen';
import PageTemplate from "../pageTemplate";


const Signup = ({location}) => {


    const [fields, setFields] = useState();

    const { step } = fields;
    const { qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen} = fields;
    const values = { qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen}

        const nextStep = () => {
        const { step } = fields;
        setFields( {...fields, step : step + 1} );

    }

     const prevStep = () => {
        const { step } = fields;
        setFields( {...fields, step: step - 1} );

    }
    
    switch(step) {
        case 1:
            return (
                <PageTemplate subjects={location.theInput}>
                <OneToTen
                nextStep={nextStep}
                values={values}
                />
                </PageTemplate>
            );
        case 2:
            return (
                <PageTemplate subjects={location.theInput}>
                <ElevenToTwenty
                nextStep={nextStep}
                prevStep={prevStep}
                values={values}
                />
                </PageTemplate>
            );
        case 3: 
               return ( <div>This</div>
                // <PageTemplate subjects={location.subjectsSelected}>
                // <TwentyToThirty
                // nextStep={nextStep}
                // prevStep={prevStep}
                // values={values}
                // />
                // </PageTemplate>
            );
        case 4: 
               return ( <div>That</div>
                // <PageTemplate subjects={location.subjectsSelected}>
                // <ThirtyToForty
                // nextStep={nextStep}
                // prevStep={prevStep}
                // values={values}
                // />
                // </PageTemplate>
            );
        default:
            return <h1>Error page not found</h1>
    }
        
}

export default Signup;