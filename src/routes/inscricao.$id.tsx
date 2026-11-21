import { createFileRoute } from '@tanstack/react-router';
import { CheckoutPage } from '@/features/correaki/checkout';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/inscricao/$id')({
  head: () => pageHead('Inscreva-se', 'Escolha sua distância, receba seu kit e confirme sua inscrição.'),
  component: Page,
});
function Page() { return <CheckoutPage id={Route.useParams().id}/>; }
