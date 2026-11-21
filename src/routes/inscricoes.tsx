import { createFileRoute } from '@tanstack/react-router';
import { RegistrationsPage } from '@/features/correaki/registrations';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/inscricoes')({
  head: () => pageHead('Minhas inscrições', 'Acompanhe suas próximas corridas e o status de cada kit.'),
  component: Page,
});
function Page() { return <RegistrationsPage />; }
