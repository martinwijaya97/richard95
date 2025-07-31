import { NextRequest, NextResponse } from 'next/server';
import foods, { Foods } from './data';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const category = searchParams.get('category');

  let filteredProducts: Foods[] = foods;
  const categories: String[] = ['Breakfast', 'Lunch', 'Dinner'];

  // Filter by id if provided
  if (id !== null) {
    filteredProducts = filteredProducts.filter(
      (product) => product.id === parseInt(id)
    );
  }

  // Filter by category if provided
  if (category !== null && !categories.includes(category)) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (filteredProducts.length > 0) {
    return NextResponse.json(filteredProducts);
  } else {
    return NextResponse.json({ message: 'Foods not found' }, { status: 404 });
  }
}
