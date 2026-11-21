import { createFileRoute } from '@tanstack/react-router';
import { NotificationsPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/notificacoes')({
  head: () => pageHead('Notificações', 'Avisos de corridas, inscrições e entrega dos seus kits.'),
  component: Page,
});
function Page() { return <NotificationsPage />; }
