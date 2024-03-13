
interface CardContent {
    title: string;
    description: string;
    content: React.ReactNode | any;
  }
  

export interface CardsType {
    id: number;
    title: string;
    slug: string;
    description: string;
    price_info: number | string;
    image?: string;
    link?: string;
    extra?: string;
    content?: CardContent[];
  }
