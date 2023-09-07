import { useState, useEffect } from 'react';

function User(props) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUserData(json))
  }, [])
  return (
    <div>
      <h1>Test av fetch (Users)</h1>
      <div>
        {userData.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <span>Email: {user.email}</span><br/>
            <span>Telefonnummer: {user.phone}</span>
            {console.log(user)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;