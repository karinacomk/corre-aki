import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/perfil')({
  head: () => pageHead('Meu perfil', 'Seus objetivos, dados pessoais e conquistas como corredor.'),
  component: Page,
});
function Page() { return <ProfilePage />; }
