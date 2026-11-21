import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/cadastro')({
  head: () => pageHead('Criar conta', 'Crie seu perfil de corredor no CorreAki.'),
  component: Page,
});
function Page() { return <AuthPage mode="signup"/>; }
