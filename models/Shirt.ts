interface Category {
  id: number
  name: string
}

export interface Shirt {
  id: number
  name: string
  image: string
  price: number
  category: Category[]
}
