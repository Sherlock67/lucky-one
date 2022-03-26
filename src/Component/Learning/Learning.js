import React from 'react';
import './Learning.css'
const Learning = () => {
    return (
        <div className='learning'>
           <h4>How React Work?</h4>
           <p>React Maintains a tree and uses a algorithm named diff algorithm.
               All those html file is a node after that it sends all this nodes to the virtual dom.Whenever we changes something we change the representational state.
               A component written in Javascript xml contains the html markup later we send it into App.js componenet which renders it into virtual dom. 
           </p>
           <h4>What is the difference between Props and State</h4>
            <p>In states we can update the state.It basically contains the data about the component and can we can change it.
                State triggers when a user does something on the UI or a system event happens.
            On the other hand props are used to store the value of a attribute of a tag.It allows to pass data from component to other component.We also can pass any function using props.Its a readonly thing means we cannot modify the props inside a component.
            </p>
        </div>
    );
};

export default Learning;