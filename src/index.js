import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button';
import registerServiceWorker from './registerServiceWorker';
const handleClick= (e)=>{
console.log('Click')
}

ReactDOM.render(
    
    <Button onClick={this.handleClick} />,
    document.getElementById('root')
);
registerServiceWorker();
