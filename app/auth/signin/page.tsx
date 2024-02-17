'use client';

import { authenticate } from '@/app/lib/actions';
import { Button } from 'antd';
import { useFormState, useFormStatus } from 'react-dom';

export default function SignIn() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <Button type="primary">Bob</Button>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
