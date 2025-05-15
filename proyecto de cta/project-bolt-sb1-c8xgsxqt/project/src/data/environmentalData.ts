import { EnvironmentalTip, GalleryImage, Fact } from '../types';

export const environmentalTips: EnvironmentalTip[] = [
  {
    id: 1,
    title: 'Ahorra agua',
    description: 'Cierra el grifo mientras te cepillas los dientes. Puedes ahorrar hasta 8 litros de agua por día.',
    imageUrl: 'https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg',
    category: 'water',
  },
  {
    id: 2,
    title: 'Usa bombillas LED',
    description: 'Las bombillas LED consumen hasta un 80% menos de energía que las bombillas incandescentes tradicionales.',
    imageUrl: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg',
    category: 'energy',
  },
  {
    id: 3,
    title: 'Recicla papel y cartón',
    description: 'Por cada tonelada de papel que se recicla, se salvan 17 árboles y se ahorran 26,000 litros de agua.',
    imageUrl: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg',
    category: 'waste',
  },
  {
    id: 4,
    title: 'Planta árboles nativos',
    description: 'Los árboles nativos proporcionan hábitat para la fauna local y ayudan a mantener el equilibrio del ecosistema.',
    imageUrl: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
    category: 'biodiversity',
  },
  {
    id: 5,
    title: 'Reduce el uso de plásticos',
    description: 'Usa bolsas reutilizables y botellas de agua rellenables para reducir los residuos plásticos.',
    imageUrl: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg',
    category: 'waste',
  },
  {
    id: 6,
    title: 'Usa transporte público',
    description: 'Reducir el uso del automóvil ayuda a disminuir las emisiones de carbono y mejora la calidad del aire.',
    imageUrl: 'https://images.pexels.com/photos/2799493/pexels-photo-2799493.jpeg',
    category: 'energy',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3876440/pexels-photo-3876440.jpeg',
    alt: 'Bosque verde lleno de vida',
    caption: 'Los bosques son los pulmones de nuestro planeta',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    alt: 'Océano cristalino',
    caption: 'Océanos limpios para un futuro sostenible',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg',
    alt: 'Energía renovable - paneles solares',
    caption: 'La energía solar es una alternativa limpia',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/2908971/pexels-photo-2908971.jpeg',
    alt: 'Río de agua limpia',
    caption: 'El agua limpia es esencial para todas las formas de vida',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/8031905/pexels-photo-8031905.jpeg',
    alt: 'Niños plantando árboles',
    caption: 'Las nuevas generaciones construyendo un futuro verde',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/5748323/pexels-photo-5748323.jpeg',
    alt: 'Reciclaje',
    caption: 'Separar residuos es el primer paso para un mundo más limpio',
  },
];

export const environmentalFacts: Fact[] = [
  {
    id: 1,
    text: 'Más de 8 millones de toneladas de plástico terminan en nuestros océanos cada año.',
    source: 'Programa de las Naciones Unidas para el Medio Ambiente',
  },
  {
    id: 2,
    text: 'La deforestación contribuye hasta el 15% de las emisiones globales de gases de efecto invernadero.',
    source: 'World Wildlife Fund',
  },
  {
    id: 3,
    text: 'Reciclando una lata de aluminio se ahorra suficiente energía para mantener un televisor encendido durante 3 horas.',
    source: 'Environmental Protection Agency',
  },
  {
    id: 4,
    text: 'El 40% de los lagos del mundo están contaminados hasta el punto de ser inadecuados para la vida acuática.',
    source: 'UNESCO',
  },
];