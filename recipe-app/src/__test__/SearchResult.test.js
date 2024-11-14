import { render, screen } from "@testing-library/react";
import SearchResults from "../pages/SearchResults";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("../data/recipes", () => [
  {
    id: 1,
    name: "김치찌개",
    description: "김치와 돼지고기를 넣어 얼큰하게 끓인 찌개.",
    image: "https://example.com/kimchi.jpg",
    ingredients: ["김치", "돼지고기", "두부", "대파", "고춧가루", "다진 마늘"],
    cookingTime: "30분",
    instructions: ["1. 김치를 볶는다.", "2. 물을 넣고 끓인다."],
  },
  {
    id: 2,
    name: "된장찌개",
    description: "된장과 채소를 넣어 구수하게 끓인 찌개.",
    image: "https://example.com/doenjang.jpg",
    ingredients: ["된장", "애호박", "두부", "감자", "대파", "청양고추"],
    cookingTime: "25분",
    instructions: ["1. 된장을 푼다.", "2. 재료를 넣고 끓인다."],
  },
  {
    id: 3,
    name: "불고기",
    description: "소고기를 양념해 구운 요리.",
    image: "https://example.com/bulgogi.jpg",
    ingredients: ["소고기", "간장", "설탕", "참기름"],
    cookingTime: "20분",
    instructions: ["1. 양념에 고기를 재운다.", "2. 구워낸다."],
  },
]);

describe("SearchResults", () => {
  test("검색어에 맞는 레시피가 필터링되어 표시되는지 확인", () => {
    render(
      <MemoryRouter initialEntries={["/search?query=김치"]}>
        <Routes>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/"김치"에 대한 검색 결과/)).toBeInTheDocument();
    expect(screen.getByText("김치찌개")).toBeInTheDocument();
  });

  test("검색어와 일치하는 레시피가 없을 때 '검색 결과가 없습니다.' 메시지가 표시되는지 확인", () => {
    render(
      <MemoryRouter initialEntries={["/search?query=아무거나"]}>
        <Routes>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("검색 결과가 없습니다.")).toBeInTheDocument();
  });

  test("검색어가 '찌개'일 때 '김치찌개'와 '된장찌개'가 표시되는지 확인", () => {
    render(
      <MemoryRouter initialEntries={["/search?query=찌개"]}>
        <Routes>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/"찌개"에 대한 검색 결과/)).toBeInTheDocument();
    expect(screen.getByText("김치찌개")).toBeInTheDocument();
    expect(screen.getByText("된장찌개")).toBeInTheDocument();
    expect(screen.queryByText("불고기")).not.toBeInTheDocument();
  });
});
