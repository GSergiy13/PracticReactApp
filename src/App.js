import { useEffect, useState } from 'react';
import './index.css';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvited] = useState([]);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => setUsers(json.data))
      .catch(err => console.warn(err))
      .finally(() => setLoading(false));
  }, []);

  const onChangeSerchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickAddInvite = (id) => {
    console.log(invites)
    if (invites.includes(id)) {
      setInvited(prev => prev.filter(_id => _id !== id));
    } else {
      setInvited((prev) => [...prev, id]);
    }
  };

  const onClickSuccess = () => {
    setSuccess(true);
  }


  return (
    <div className="App">
      {
        success ? (
          <Success count={invites.length} />
        ) : (
          <Users
            items={users}
            isLoading={isLoading}
            searchValue={searchValue}
            setSearchValue={onChangeSerchValue}
            invites={invites}
            onClickAddInvite={onClickAddInvite}
            onClickSuccess={onClickSuccess}
          />
        )
      }
    </div>
  );
}

export default App;
