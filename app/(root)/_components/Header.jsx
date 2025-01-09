import Link from 'next/link';
import Logo from '@/assets/svg/logo.svg';
import Image from 'next/image';
function Header() {
  return (
    <header className='h-20 px-8 justify-between flex items-center'>
      <Link href='/' className='text-red-600 font-bold text-3xl'>
        <Image src={Logo.src} width={120} height={33} alt='netflix' />
      </Link>
      <div>
        <button className='font-bold'>로그인</button>
      </div>
    </header>
  );
}

export default Header;
