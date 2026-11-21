import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/login')({
  head: () => pageHead('Entrar', 'Entre na sua conta e encontre corridas de rua.'),
  component: Page,
});
function Page() { return <AuthPage mode="login"/>; }
