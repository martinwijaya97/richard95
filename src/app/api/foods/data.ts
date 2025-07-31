// pages/api/products/products.ts

export interface Foods {
  id: number;
  name: string;
  category: string;
  image: string;
  calories: number;
  preparationTime: number;
  rating: number;
  reviewCount: number;
  isLiked: boolean;
}

const foods: Foods[] = [
  {
    id: 1,
    name: 'Spicy Ramen Noodles',
    image: 'assets/images/ramen-noodles.jpg',
    calories: 120,
    preparationTime: 15,
    rating: 4.4,
    reviewCount: 23,
    isLiked: false,
    category: 'dinner',
  },
  {
    id: 2,
    name: 'Beef Steak',
    image: 'assets/images/beef-steak.jpg',
    calories: 140,
    preparationTime: 25,
    rating: 4.4,
    reviewCount: 23,
    isLiked: true,
    category: 'dinner',
  },
  {
    id: 3,
    name: 'Butter Chicken',
    image: 'assets/images/butter-chicken.jpg',
    calories: 130,
    preparationTime: 18,
    rating: 4.2,
    reviewCount: 10,
    isLiked: false,
    category: 'lunch',
  },
  {
    id: 4,
    name: 'French Toast',
    image: 'assets/images/french-toast.jpg',
    calories: 110,
    preparationTime: 16,
    rating: 4.6,
    reviewCount: 90,
    isLiked: true,
    category: 'breakfast',
  },
  {
    id: 5,
    name: 'Dumplings',
    image: 'assets/images/dumplings.jpg',
    calories: 150,
    preparationTime: 30,
    rating: 4.0,
    reviewCount: 76,
    isLiked: false,
    category: 'lunch',
  },
  {
    id: 6,
    name: 'Mexican Pizza',
    image: 'assets/images/mexican-pizza.jpg',
    calories: 140,
    preparationTime: 25,
    rating: 4.4,
    reviewCount: 23,
    isLiked: false,
    category: 'dinner',
  },
];

export default foods;
