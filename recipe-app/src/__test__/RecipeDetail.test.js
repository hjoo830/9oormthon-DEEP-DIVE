import { render, screen, fireEvent } from "@testing-library/react";
import RecipeDetail from "../pages/RecipeDetail";

const mockRecipe = {
  name: "김치찌개",
  description: "김치와 돼지고기를 넣어 얼큰하게 끓인 찌개.",
  image:
    "https://i.namu.wiki/i/8drgvI-cQLUfJDC00zbl2ZolK4W3o4ZkVSpR-zM5FZk_QzT58vYnx_7ohk0qwGYYiSLPiZgwccyIEFUtYKDjUQ.webp",
  ingredients: ["김치", "돼지고기", "두부", "대파", "고춧가루", "다진 마늘"],
  cookingTime: "30분",
  instructions: [
    "1. 냄비에 돼지고기와 다진 마늘을 넣고 볶습니다.",
    "2. 고기가 반쯤 익으면 김치를 넣고 함께 볶아줍니다.",
    "3. 김치와 고기가 잘 어우러지면 물을 붓고 끓입니다.",
    "4. 끓기 시작하면 두부와 대파를 넣고 한소끔 더 끓입니다.",
    "5. 고춧가루와 간을 맞춰 완성합니다.",
  ],
};

describe("RecipeDetail", () => {
  test("레시피 상세 정보가 렌더링되는지 확인", () => {
    render(
      <RecipeDetail
        recipe={mockRecipe}
        onClose={() => {}}
        clickPosition={{ x: 100, y: 100 }}
      />
    );

    expect(screen.getByText("김치찌개")).toBeInTheDocument();
    expect(
      screen.getByText("김치와 돼지고기를 넣어 얼큰하게 끓인 찌개.")
    ).toBeInTheDocument();
    expect(screen.getByText("재료")).toBeInTheDocument();
    expect(screen.getByText("조리 시간: 30분")).toBeInTheDocument();

    mockRecipe.instructions.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  test("닫기 버튼 클릭 시 onClose 함수가 호출되는지 확인", () => {
    const onCloseMock = jest.fn();

    render(
      <RecipeDetail
        recipe={mockRecipe}
        onClose={onCloseMock}
        clickPosition={{ x: 100, y: 100 }}
      />
    );

    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
