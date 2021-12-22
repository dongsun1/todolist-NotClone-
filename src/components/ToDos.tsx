import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDark, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
  }
`;

function ToDos() {
  const setTheme = useSetRecoilState(isDark);
  const isDarkTheme = useRecoilValue(isDark);
  const changeTheme = () => {
    setTheme((prev) => !prev);
  };
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Container>
      <button onClick={changeTheme}>{isDarkTheme ? "Light" : "Dark"}</button>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );
}

export default ToDos;
