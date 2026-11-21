import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/features/correaki/account';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/privacidade')({
  head: () => pageHead('Política de privacidade', 'Saiba como seus dados e direitos são tratados pelo CorreAki.'),
  component: Page,
});
function Page() { return <LegalPage privacy={true}/>; }
