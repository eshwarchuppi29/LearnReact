import type { Product } from "./Product"

export type Basket = {
  id: string
  items: Item[]
}

export class Item {
  constructor(product: Product, quantity: number) {
    this.id = product.productId
    this.productId = product.productId
    this.quantity = quantity
    this.price = product.price
    this.name = product.name
    this.image = product.image
    this.description = product.description
    this.brand = product.brand
  }

  id: number
  productId: number
  quantity: number
  price: number
  name: string
  image: string
  description: string
  brand: string
}