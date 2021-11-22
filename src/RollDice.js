import React,{ Component } from 'react'
import './RollDice.css'
import Die from './Die'
import './Die.css'

const RollDice = (props) => {
    const { entString, sides } = props;
    
    const [die1, handleDie1] = React.useState('one');
    const [die2, handleDie2] = React.useState('one');
    const [rolling, handleRolling] = React.useState(false);
    const [rollNumber, handleRollNumber] = React.useState(0);
    
    const roll = () => {
        handleRolling(true);
        handleRollNumber(Math.floor(Math.random() * entString.length));
        handleDie1(sides[(entString.charCodeAt(rollNumber) % sides.length)]);
        handleRollNumber(Math.floor(Math.random() * entString.length));
        handleDie2(sides[(entString.charCodeAt(rollNumber + 1) % sides.length)]);
        // Start timer of one sec when rolling start
        // setTimeout(() => {
            handleRolling(false)
        // }, 100)
        
    }


    const handleBtn = rolling ?
        'RollDice-rolling' : ''
    

    return (
                <div className='RollDice'>
                    <div className='RollDice-container'>
                        {/* <i className={`Die fas fa-dice-${die1}
                    ${rolling && 'Die-shaking'}`} /> */}
                {die1} - {die2}
                        {/* <i className={`Die fas fa-dice-${die2}
                    ${rolling && 'Die-shaking'}`} /> */}
                    </div>
                    <button className={handleBtn}
                        disabled={rolling}
                        onClick={roll}>
                        {rolling ? 'Rolling' : 'Roll Dice!'}
                    </button>
                </div>
            )
    
       } 



    export default RollDice;
