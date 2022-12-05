import React, { useState, useRef } from 'react';
export function Game(props) {
    const inputRef = useRef(null);
    const min = 1, max = 1000;
    const [rndNum, setNum] = useState(1);
    const [tryNum, setTry] = useState(0);
    const [flag, setFlag] = useState(true);
    const [result, setResult] = useState('');
    function Number() {
        setNum(Math.floor(Math.random() * (max - min + 1)) + min);
        setFlag(false);
    }
    const CheckNum = () => {
        const tmp = inputRef.current.value;
        if (rndNum === tmp) {
            setResult('Good Job!');
            setTry(0);
            setFlag(true);
        }
        if (rndNum > tmp) {
            setResult("Ваше число невірно. Воно менше ніж N");
            setTry(tryNum + 1);
        }
        if (rndNum < tmp) {
            setResult('Ваше число невірно. Воно більше ніж N');
            setTry(tryNum + 1);
        }
        if (tryNum === 9) {
            setTry(0);
            setResult("Game Over!");
            setFlag(true);
        }
    }
    function CheckInt() {
        if (flag) {
            return (
                <div>
                    <input type='submit' value='New Game' onClick={Number} />
                    <input ref={inputRef} type='number' placeholder='number' />
                    <input type='submit' value='Check' disabled onClick={CheckNum} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <input type='submit' value='New Game' disabled onClick={Number} />
                    <input ref={inputRef} type='number' placeholder='number' />
                    <input type='submit' value='Check' onClick={CheckNum} />
                </div>
            )
        }
    }
    return (
        <div>
            <CheckInt />
            <dib>
                <p>Information:</p>
                <div>
                    <p>N &#60; 500</p>
                    <p>N &#62; 250</p>
                    <p>N &#60; 375</p>
                </div>
                <p>Attempts: {tryNum}</p>
                <p>Result: {result}</p>
            </dib>
        </div>
    )
}
