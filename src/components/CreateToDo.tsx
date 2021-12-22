import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: center;
  form {
    display: flex;
    height: 30px;
  }
  input {
    width: 270px;
    border-radius: 5px;
  }
  button {
    font-size: 20px;
    width: 30px;
    border-radius: 5px;
    margin-top: 1px;
    cursor: pointer;
  }
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [{ id: Date.now(), text: toDo }, ...oldToDos]);
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Pleace write a To Do",
          })}
          type="text"
        />
        <button>+</button>
      </form>
    </Wrapper>
  );
}

export default CreateToDo;
