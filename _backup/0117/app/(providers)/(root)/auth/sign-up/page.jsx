import Button from '@/components/Button';
import { Input } from '@/components/Input';

function SignUpPage() {
  return (
    <main className='h-screen flex flex-col items-center justify-center p-8'>
      <form className='flex flex-col gap-y-5 '>
        <h1 className='text-3xl font-bold'>회원가입</h1>

        <Input label='이메일' name='email' type='email' required />
        <Input
          babel='비밀번호'
          name='password'
          type='password'
          required
          helperText='비밀번호는 8자 이상 입력해주세요'
        />
        <Input
          label='비밀번호 확인'
          name='passwordConfirm'
          type='passwordConfirm'
          required
          helperText='비밀번호를 다시 한 번 입력해주세요'
        />

        <Button>회원가입 하기</Button>
      </form>
    </main>
  );
}

export default SignUpPage;
