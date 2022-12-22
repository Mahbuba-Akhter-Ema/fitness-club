import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='que-component'>
            <div className='que-ans'>
                <h1>1. How does react work?</h1>
                <h5>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</h5>
                <h1>2. Diffrence between props and state in react.</h1>
                <h5>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h5>
                <h1>3. Use of usestate in react js.</h1>
                <h5>useState can be used to toggle between two values, usually true and false , in order to toggle a flag, such as the display mode: import useState from 'react'; import classes from './UseCaseToggle.</h5>
            </div>
        </div>
    );
};

export default Questions;