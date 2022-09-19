import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    id: "6302b53b1f7d15ecfb052f55",
    title: "Mizuno Wave Momentum 2",
    description: "Stay on top of your game from start to finish with the new Momentum 2's unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.",
    price: 119.96,
    weight: 345,
    img: "https://dlbqczpap4fan.cloudfront.net/momentum.png",
    count: 3,
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      id: "6302b53b1f7d15ecfb052f55",
      title: "Mizuno Wave Momentum 2",
      description: "Stay on top of your game from start to finish with the new Momentum 2's unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.",
      price: 119.96,
      weight: 345,
      img: "https://dlbqczpap4fan.cloudfront.net/momentum.png",
      count: 2,
    },
    count: 2,
  },
  {
    product: {
      id: "6302b53b1f7d15ecfb052f55",
      title: "Mizuno Wave Momentum 2",
      description: "Stay on top of your game from start to finish with the new Momentum 2's unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.",
      price: 119.96,
      weight: 345,
      img: "https://dlbqczpap4fan.cloudfront.net/momentum.png",
      count: 2,
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
