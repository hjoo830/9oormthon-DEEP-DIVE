import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../pages/SearchBar";

describe("SearchBar", () => {
  test("올바른 입력값으로 onSearch가 호출되는지 확인", () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    const searchInput = screen.getByPlaceholderText("레시피 검색");
    fireEvent.change(searchInput, { target: { value: "김치찌개" } });

    expect(onSearchMock).toHaveBeenCalledWith("김치찌개");
  });
});
