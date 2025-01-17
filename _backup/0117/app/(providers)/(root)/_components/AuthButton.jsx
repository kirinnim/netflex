'use client';

import Modal from '@/components/Modal';
import { useAuth } from '@/contexts/AuthContext';
import { useModal } from '@/contexts/ModalContext';
import LoginModal from './LoginModal';
import Link from 'next/link';

function AuthButton() {
  const { isLoggedIn, logIn, logOut } = useAuth();
  const modal = useModal();

  const handleClickLogIn = () => {
    modal.open(<LoginModal />);
  };

  if (isLoggedIn)
    return (
      <button onClick={handleClickLogIn} className='font-bold'>
        로그아웃
      </button>
    );

  return (
    <div className='flex items-center gap-x-5'>
      <Link href='/auth/sign-up' className='font-bold'>
        회원가입
      </Link>
      <button onClick={handleClickLogIn} className='font-bold'>
        로그인
      </button>
    </div>
  );
}

export default AuthButton;
