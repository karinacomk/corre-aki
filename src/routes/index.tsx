import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/features/correaki/home';
import { pageHead } from '@/features/correaki/data';
export const Route = createFileRoute('/')({
 head: () => pageHead('CorreAki — Encontre sua corrida', 'Encontre corridas de rua, inscreva-se e receba seu kit em casa ou retire em um ponto parceiro.'),
 component: HomePage,
});
