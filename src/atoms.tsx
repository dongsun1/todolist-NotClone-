import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

export const isDark = atom({
  key: "idDark",
  default: true,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos;
  },
});
