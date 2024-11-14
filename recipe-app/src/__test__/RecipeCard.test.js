import { render, screen, fireEvent } from "@testing-library/react";
import RecipeCard from "../components/RecipeCard";

const mockRecipe = {
  name: "된장찌개",
  description: "된장과 채소를 넣어 구수하게 끓인 찌개.",
  image: "https://example.com/image.jpg",
};

describe("RecipeCard", () => {
  test("레시피 카드에 레시피 정보가 렌더링되는지 확인", () => {
    render(<RecipeCard recipe={mockRecipe} onClick={() => {}} />);

    expect(screen.getByText("된장찌개")).toBeInTheDocument();
    expect(
      screen.getByText("된장과 채소를 넣어 구수하게 끓인 찌개.")
    ).toBeInTheDocument();
  });

  test("카드를 클릭했을 때 onClick 함수가 호출되는지 확인", () => {
    const onClickMock = jest.fn();
    render(<RecipeCard recipe={mockRecipe} onClick={onClickMock} />);

    const card = screen.getByRole("img");
    fireEvent.click(card);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
