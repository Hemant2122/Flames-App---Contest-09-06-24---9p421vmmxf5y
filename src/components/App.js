import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

    const calculateRelationship = () => {
        if (input1 === '' || input2 === '') {
            setResult('Please Enter valid input');
            return;
        }

        let str1 = input1.toLowerCase().split('');
        let str2 = input2.toLowerCase().split('');

        for (let i = 0; i < str1.length; i++) {
            let index = str2.indexOf(str1[i]);
            if (index !== -1) {
                str1.splice(i, 1);
                str2.splice(index, 1);
                i--; // To stay at the same index after splice
            }
        }

        const totalLength = str1.length + str2.length;
        const remainder = totalLength % 6;

        let relationship = '';
        switch (remainder) {
            case 1:
                relationship = 'Friends';
                break;
            case 2:
                relationship = 'Love';
                break;
            case 3:
                relationship = 'Affection';
                break;
            case 4:
                relationship = 'Marriage';
                break;
            case 5:
                relationship = 'Enemy';
                break;
            case 0:
                relationship = 'Siblings';
                break;
            default:
                relationship = 'Please Enter valid input';
        }

        setResult(relationship);
    };

    const clearInputs = () => {
        setInput1('');
        setInput2('');
        setResult('');
    };

    return (
        <div id="main">
            <input 
                data-testid="input1" 
                type="text" 
                value={input1} 
                onChange={(e) => setInput1(e.target.value)} 
            />
            <input 
                data-testid="input2" 
                type="text" 
                value={input2} 
                onChange={(e) => setInput2(e.target.value)} 
            />
            <button 
                data-testid="calculate_relationship" 
                onClick={calculateRelationship}
            >
                Calculate Relationship Future
            </button>
            <button 
                data-testid="clear" 
                onClick={clearInputs}
            >
                Clear
            </button>
            <h3 data-testid="answer">{result}</h3>
        </div>
    );
}

export default App;
