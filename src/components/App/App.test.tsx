import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import App from "~/components/App/App";
import { server } from "~/mocks/server";
import { rest } from "msw";
import API_PATHS from "~/constants/apiPaths";
import { CartItem } from "~/models/CartItem";
import { AvailableProduct } from "~/models/Product";
import { renderWithProviders } from "~/testUtils";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { formatAsPrice } from "~/utils/utils";

test("Renders products list", async () => {
  const products: AvailableProduct[] = [
    {
      id: "6302b53b1f7d15ecfb052f55",
      title: "Mizuno Wave Momentum 2",
      description: "Stay on top of your game from start to finish with the new Momentum 2's unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.",
      price: 119.96,
      weight: 345,
      count: 2,
      img: "https://dlbqczpap4fan.cloudfront.net/momentum.png"
    },
    {
      id: "6302b53b3bc5e025cf74fd40",
      title: "Mizuno Wave Momentum 2 Mid",
      description: "Stay on top of your game from start to finish with the new Momentum 2 Mid‘s unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.",
      price: 135.96,
      weight: 370,
      count: 4,
      img: "https://dlbqczpap4fan.cloudfront.net/momentum_mid.png"
    },
  ];
  server.use(
    rest.get(`${API_PATHS.bff}/product/available`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.delay(),
        ctx.json<AvailableProduct[]>(products)
      );
    }),
    rest.get(`${API_PATHS.cart}/profile/cart`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json<CartItem[]>([]));
    })
  );
  renderWithProviders(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/));
  products.forEach((product) => {
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(formatAsPrice(product.price))).toBeInTheDocument();
  });
});
