export interface User {
  username: string;
  isLoggedIn: boolean;
}

export interface EnvironmentalTip {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'water' | 'energy' | 'waste' | 'biodiversity';
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export interface Fact {
  id: number;
  text: string;
  source: string;
}