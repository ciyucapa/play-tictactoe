import { useState } from 'react';

import {Assents} from './../../../assents/index';
import Box from '../Box';

import './../Cell/index.css';

const Row = () => {

    const[playOne, setPPlayOne] = useState(false);
    const[playTwo, setPPlayTwo] = useState(false);
    const [isIconEquis, setIconEquis] = useState(false);
    const [isIconZero, setIconZero] = useState(false);
    
    const onTurn = () => {
        if(playOne === false && playTwo === false){
            setIconEquis(true)
        }
        setPPlayOne(true)

    }

    console.log("el valor del 1 es", playOne)

    const onTurn2 = () => {
        if(playTwo === false && playOne === false) {
            setIconZero(true)
        }
        setPPlayTwo(true)
    }

    console.log("el valor del 2 es", playTwo)
    
    const onTurn3 = () => {
        if(playTwo === true && playOne === true) {
            setIconZero(true)
        }
        setPPlayTwo(false)
        setIconZero(false)
    }
    

    return (
    <div className="cell-row">
        <Box onClick={onTurn} id="1" src={ playOne ? Assents.equis : '' && playTwo ? Assents.zero : '' } />
        <Box onClick={onTurn2} id="2" src={ playOne ? Assents.equis : '' && playTwo ? Assents.zero : ''}  />
        <Box onClick={onTurn3} id="3" src={ playOne ? Assents.equis : '' && playTwo ? Assents.zero : ''}  />
    </div>
    );
};

export default Row;