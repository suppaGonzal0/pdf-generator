import React from 'react'
import {useContext } from 'react'
import { useHistory } from 'react-router-dom';
import {context} from '../../Context';

export default function Form() {

    const history = useHistory();

    const {setName, setAge, setContry} = useContext(context);

    const handleClick = () => {
        history.push("/pdf");
    }

    return (
        <div>

            <input
            type="text" placeholder="Enter you name"
            onChange={(e) => {
                setName(e.target.value);
            }}
            />

            <input
            type="text" placeholder="Enter you age"
            onChange={(e) => {
                setAge(e.target.value);
            }}
            />

            <input
            type="text" placeholder="Enter you country"
            onChange={(e) => {
                setContry(e.target.value);
            }}
            />

            <button onClick={handleClick}>Submit</button>

        </div>
    )
}
