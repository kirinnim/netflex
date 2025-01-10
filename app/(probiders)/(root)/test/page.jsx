import Button from '@/components/Button';

function TestPage({ children, size, intent }) {
  return (
    <div className='flex flex-col gap-4'>
      <Button size='medium' intent='primary'></Button>
      <Button size='medium' intent='secondary'></Button>
      <Button size='medium' intent='white'></Button>
      <Button size='medium' intent='primary'></Button>
      <Button size='medium' intent='black'></Button>
    </div>
  );
}

export default TestPage;
