import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/termos')({
  head: () => pageHead('Termos de uso', 'Regras de uso, inscrições e cancelamentos no CorreAki.'),
  component: Page,
});
function Page() { return <LegalPage privacy={false}/>; }
