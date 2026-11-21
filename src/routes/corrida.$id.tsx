import { createFileRoute } from '@tanstack/react-router';
import { RacePage } from '@/features/correaki/race';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/corrida/$id')({
  head: () => pageHead('Detalhes da corrida', 'Distâncias, valores, percurso e opções de kit para sua corrida.'),
  component: Page,
});
function Page() { return <RacePage id={Route.useParams().id}/>; }
