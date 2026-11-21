import runners from '@/assets/runners.jpg.asset.json';
import roadRace from '@/assets/road-race.jpg.asset.json';
import parkRun from '@/assets/park-run.jpg.asset.json';

export const photos = [runners.url, roadRace.url, parkRun.url];
export type Race = { id: string; name: string; city: string; state: string; distances: number[]; price: number; organizer: string; beginner: boolean; date: string; photo: string; start: string; location: string; description: string; course: string; accessibility: string[] };
const rows: [string,string,string,number[],number,string,boolean,string][] = [
 ['Corrida das Flores','Mogi das Cruzes','SP',[5,10],89,'Mogi Run Eventos',true,'2026-11-29'],
 ['Night Run Paulista','São Paulo','SP',[5,10],129,'Paulista Sports',true,'2026-12-05'],
 ['Meia Maratona de São Paulo','São Paulo','SP',[21],189,'SP Corre',false,'2026-12-13'],
 ['Maratona de São Paulo','São Paulo','SP',[42],259,'SP Corre',false,'2027-04-11'],
 ['Circuito das Estações: Verão','São Paulo','SP',[5,10],119,'Estações Run',true,'2026-12-20'],
 ['Corrida do Parque Vicentina Aranha','São José dos Campos','SP',[5,10],95,'Vale Corre',true,'2027-01-10'],
 ['Desafio da Serra','Campos do Jordão','SP',[10,21],169,'Serra Eventos',false,'2027-02-07'],
 ['Meia Maratona do Rio','Rio de Janeiro','RJ',[21],199,'Rio Run',false,'2027-02-21'],
 ['Maratona do Rio','Rio de Janeiro','RJ',[42],279,'Rio Run',false,'2027-05-16'],
 ['Corrida da Orla','Niterói','RJ',[5,10],99,'Orla Eventos',true,'2027-01-24'],
 ['Volta da Pampulha','Belo Horizonte','MG',[10,18],149,'BH Esportes',false,'2027-03-14'],
 ['Corrida das Montanhas','Ouro Preto','MG',[10,21],159,'Minas Trail',false,'2027-04-25'],
];
export const races: Race[] = rows.map(([name,city,state,distances,price,organizer,beginner,date],i)=>({id:String(i+1),name,city,state,distances,price,organizer,beginner,date,photo:photos[i%3] ?? runners.url,start:i===1?'19:00':'07:00',location:city==='Mogi das Cruzes'?'Parque Centenário':city==='São Paulo'?'Parque Ibirapuera':'Praça Central',description:`Uma corrida para viver ${city} de um jeito diferente. Junte-se a outros corredores em uma prova com estrutura completa, hidratação e muita energia do início ao fim.${beginner?' Um percurso acolhedor, perfeito para sua primeira linha de chegada.':''}`,course:`Percurso de ${distances.map(d=>`${d} km`).join(' e ')} pelas ruas de ${city}, com sinalização, pontos de hidratação a cada 2,5 km e apoio da equipe durante a prova.`,accessibility:['Guia de corrida','Cadeira de rodas','Área reservada na largada',...(i%2===0?['Intérprete de Libras']:[])]}));
export const money = (value:number) => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export const dateLabel = (date:string) => new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR');
export const distancePrice = (race:Race,distance:number) => race.price+(distance===race.distances[0]?0:30);
export const isSoldOut = (race:Race,distance:number) => race.id==='1'&&distance===10;
export type Delivery = 'home'|'partner'|'organizer';
export const deliveryFee = (method:Delivery,city:string,state:string,race:Pick<Race,'city'|'state'>) => method==='organizer'?0:method==='partner'?7.9:state.toLowerCase()!==race.state.toLowerCase()?34.9:city.trim().toLowerCase()===race.city.toLowerCase()?14.9:24.9;
export const couponDiscount = (coupon:string,price:number) => coupon.trim().toUpperCase()==='PRIMEIRACORRIDA'?price*0.15:coupon.trim().toUpperCase()==='CORREAKI10'?Math.min(10,price):0;
export const refundRate = (date:string,now:Date) => (new Date(`${date}T00:00:00`).getTime()-new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime())/86400000>=7?1:0.5;
export const canChangeAddress = (status:number,delivery:Delivery) => delivery==='home'&&status<=1;
export const earnedPoints = (registrations:number,completed:number) => registrations*100+completed*50;
export const kitDeadline = (date:string) => {const d=new Date(`${date}T12:00:00`);d.setDate(d.getDate()-2);return d.toLocaleDateString('pt-BR');};
export const partners = (race:Race) => [{name:'Loja Corre Mais',address:`Rua dos Esportes, 120 · Centro · ${race.city}/${race.state}`,hours:'Segunda a sábado, das 9h às 18h'},{name:'Academia Ritmo',address:`Av. da Independência, 450 · ${race.city}/${race.state}`,hours:'Segunda a sexta, das 7h às 21h'}];
export const kitItems = ['Camiseta oficial','Número de peito','Chip de cronometragem','Medalha de participação','Sacochila'];
export const notificationTypes = ['Compra','Entrega do kit','Cadastro','Cancelamento','Avisos da prova'];
export const timeline = (delivery:Delivery) => ['Inscrição confirmada','Kit separado',delivery==='home'?'Kit a caminho':'Pronto para retirada',delivery==='home'?'Kit entregue':'Kit retirado'];
export const pageHead = (title:string,description:string) => ({meta:[{title:`${title} | CorreAki`},{name:'description',content:description},{property:'og:title',content:`${title} | CorreAki`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]});
