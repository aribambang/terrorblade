import { useState } from 'react';

const users = [
  { name: 'Ari', age: 24 },
  { name: 'Bambang', age: 24 },
  { name: 'Kurniawan', age: 24 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const findUser = users.find((user) => {
      return user.name === name;
    });

    setUser(findUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
