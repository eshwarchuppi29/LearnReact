export type Basket = {
  id: string
  items: Item[]
}

export type Item = {
  id: number
  productId: number
  quantity: number
  price: number
  name: string
  image: string
  description: string
  brand: string
}