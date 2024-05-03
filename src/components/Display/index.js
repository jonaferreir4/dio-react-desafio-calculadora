import { DisplayContainer } from "./styles";
const Display = props => {
    return (
      <DisplayContainer>
        <input disabled value={props.value}/>
      </DisplayContainer>
        
    );
  }
  
  export default Display;
  