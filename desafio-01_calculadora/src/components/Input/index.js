import { InputContainer } from "./styles";


function InputScreen({value}) {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  );
}

export default InputScreen;
