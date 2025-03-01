import { collectionsData } from '@/lib/constants/Collections';

// Define valid categories type
type Category = keyof typeof collectionsData;

// Generate static params for all categories
export function generateStaticParams() {
  const categories = Object.keys(collectionsData) as Category[];
  return categories.map(category => ({
    category: category,
  }));
}

export default generateStaticParams;
