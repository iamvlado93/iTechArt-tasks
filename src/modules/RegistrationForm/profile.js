import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

export default function Profile() {
  const history = useHistory();

  return (
    <div className="profile-main">
      <div className="success-message">You have successfully registered!</div>
      <h2>И вы вошли в свой кабинет. Ура</h2>
      <button
        type="button"
        className="button-submit"
        onClick={() => {
          history.push('/registration-form');
        }}
      >
        Выйти из кабинета
      </button>
    </div>
  );
}
