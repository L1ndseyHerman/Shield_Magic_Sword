import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

class FirstLoad extends React.Component
{
    render() 
    {
        return (
            <div>
                <h1>Rock, Paper, Scissors</h1>
                <p id="thePar">Try to beat the computer at Rock-Paper-Scissors.</p>
                <p>And check out <a id="aLink1" href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
                <footer id="theFooter">Current PWA version is 1.0.0, updated 05/09/21</footer>
            </div>
        );
    }
}

ReactDOM.render(<FirstLoad></FirstLoad>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

