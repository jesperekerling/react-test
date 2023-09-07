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
      <h1>Users</h1>
      <div>
        {userData.map(user => (
          <div key={user.id}>
            <p>{user.name} {user.email} {user.phone}</p>
            {console.log(user)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;