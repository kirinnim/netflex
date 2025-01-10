'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useModal } from '@/contexts/ModalContext';
import LoginModal from './LogInModal';
function AuthButton() {
  const { isLoggedIn, logOut } = useAuth();
  const modal = useModal();

  const handleClickLogIn = () => {
    modal.open(<LoginModal />);
  };

  if (isLoggedIn)
    return (
      <button onClick={logOut} className='font-bold'>
        로그아웃
      </button>
    );

  return (
    <button onClick={handleClickLogIn} className='font-bold'>
      로그인
    </button>
  );
}

export default AuthButton;
