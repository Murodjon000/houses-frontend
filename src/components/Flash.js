import React, { useState, useEffect } from 'react';
import Bus from '../helpers/Bus';

const Flash = () => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    Bus.addListener('flash', ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    });
  }, []);

  useEffect(() => {
    if (document.querySelector('.close') !== null) {
      document
        .querySelector('.close')
        .addEventListener('click', () => setVisibility(false));
    }
  });

  return (
    visibility && (
      <div className={`alert alert-${type} alert__wrapper w-100`}>
        <span className="close">
          <strong>X</strong>
        </span>
        <p>{message}</p>
      </div>
    )
  );
};

export default Flash;
