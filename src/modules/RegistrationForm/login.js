import React from 'react';
import {useHistory} from 'react-router-dom';
import './index.css';

export default function Login () {

    const history = useHistory();

    return (
        <div className='login-main'>
            <h2>Вы вошли в свой кабинет. Ура</h2>
            <button onClick={() => {history.push("/registration")}}>Выйти из кабинета</button>
        </div>
    )
}

