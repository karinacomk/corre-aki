import { createFileRoute } from '@tanstack/react-router';
import { NotificationSettingsPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/notificacoes_/configuracoes')({
  head: () => pageHead('Configurar notificações', 'Escolha quais avisos de corridas você deseja receber.'),
  component: Page,
});
function Page() { return <NotificationSettingsPage />; }
