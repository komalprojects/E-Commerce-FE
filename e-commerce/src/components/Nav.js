import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from './helpers';
import { logout } from './LoginSlice';

export default function Nav() {
  const dispatch = useDispatch();
  const auth = useAuth();

  const linkMenu = [
    { name: 'Products', to: '/', id: 1 },
    { name: 'Add Products', to: '/add', id: 2 },
    { name: 'Update Product', to: '/update', id: 3 },
    { name: 'Profile', to: '/profile', id: 4 },
    { name: 'Logout', to: '/login', id: 5 },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className='nav-ul'>
      {auth ? (
        linkMenu.map((el) => {
          return (
            <Link key={el.id} to={el.to} onClick={el.name === 'Logout' && handleLogout}>
              {el.name}
            </Link>
          );
        })
      ) : (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>SignUp</Link>
        </>
      )}
    </ul>
  );
}
