import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, toDoState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5px;
  border: 1px solid ${(props) => props.theme.boardColor};
  width: 300px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  button {
    width: 30px;
  }
`;

function ToDo({ text, id }: ITodo) {
  const setToDos = useSetRecoilState(toDoState);
  const toDoDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Wrapper>
      <span>{text}</span>
      <button onClick={toDoDelete}>-</button>
    </Wrapper>
  );
}

export default ToDo;
