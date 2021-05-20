import React, { useState, useEffect } from 'react';
import { getUser } from '../helpers/api_calls';

const User = () => {
  const [name, setName] = useState('');

  useEffect(async () => {
    const data = await getUser().then((response) => response);
    setName(data.user.username);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default User;
