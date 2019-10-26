import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const { fullname } = useSelector(state => state.user.profile);

  const logout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="MeetApp Logo" />
        </Link>
        <div>
          <div>
            <p>{fullname}</p>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button onClick={logout} type="button">
            Sair
          </button>
        </div>
      </Content>
    </Container>
  );
}
