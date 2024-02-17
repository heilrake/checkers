import { redirect } from 'next/navigation';

export default function Home() {
  const accessDenied = true;
  if (accessDenied) {
    redirect('/auth/signin');
  }

  return <p>home</p>;
}
