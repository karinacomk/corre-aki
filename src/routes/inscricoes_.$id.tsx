import { createFileRoute } from '@tanstack/react-router';
import { RegistrationPage } from '@/features/correaki/registrations';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/inscricoes_/$id')({
  head: () => pageHead('Acompanhar inscrição', 'Veja cada etapa do seu kit e gerencie sua inscrição.'),
  component: Page,
});
function Page() { return <RegistrationPage id={Route.useParams().id}/>; }
