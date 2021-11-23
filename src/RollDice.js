import React,{ Component } from 'react'
import './RollDice.css'

const RollDice = (props) => {
    const { entString, sides } = props;
    
    const [die1, handleDie1] = React.useState(1);
    const [die2, handleDie2] = React.useState(5);
    const [rolling, handleRolling] = React.useState(false);
    const [rollNumber, handleRollNumber] = React.useState(Math.floor(Math.random() * entString.length));
    
    const roll = () => {
        handleRolling(true);
        handleRollNumber(Math.floor(Math.random() * entString.length));
        handleDie1(entString.charCodeAt(rollNumber) % sides.length);
        handleRollNumber(Math.floor(Math.random() * entString.length));
        handleDie2(entString.charCodeAt(rollNumber + 1) % sides.length);
        setTimeout(() => {
            handleRolling(false)
        }, 100)
        
    }

    const handleBtn = rolling ?
        'RollDice-rolling' : ''

    const firstDieImage = `./Alea_${die1 + 1}.png`;
    const secondDieImage = `./Alea_${die2 + 1}.png`;

    return (
        <div className='RollDice'>
                <h1>Quantum Randomness Dice</h1>
            <div className='RollDice-container'>
                <img src={firstDieImage} />
                <img src={secondDieImage} />
                    </div>
            <h2>
            {die1 + die2 + 2}
            </h2>
                    <button className={handleBtn}
                        disabled={rolling}
                        onClick={roll}>
                        {rolling ? 'Rolling' : 'Roll Dice!'}
                    </button>
                </div>
            )
    
       } 



    export default RollDice;
