import { createFileRoute } from '@tanstack/react-router';
import { ConfirmationPage } from '@/features/correaki/checkout';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/inscricao/$id_/confirmacao')({
  head: () => pageHead('Inscrição confirmada', 'Sua corrida está confirmada. Acompanhe a entrega do kit.'),
  component: Page,
});
function Page() { return <ConfirmationPage id={Route.useParams().id}/>; }
