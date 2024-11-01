import axios from "axios";

const api = axios.create({
  baseURL: "https://example.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export const fetchTodos = async () => {
  // try {
  //   const response = await api.get("/todos");
  //   console.log(response.data);
  // } catch (error) {
  //   console.error("Failed to fetch todos:", error);
  // }
  return [
    { id: "1", task: "구름톤 출석하기", completed: true },
    { id: "2", task: "밥 먹기", completed: false },
    { id: "3", task: "모던 리액트 완독하기", completed: false },
  ];
};
