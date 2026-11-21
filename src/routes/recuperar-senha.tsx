import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/recuperar-senha')({
  head: () => pageHead('Recuperar senha', 'Recupere o acesso ao seu perfil de corredor.'),
  component: Page,
});
function Page() { return <AuthPage mode="recover"/>; }
