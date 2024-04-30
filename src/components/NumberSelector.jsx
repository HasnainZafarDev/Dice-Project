import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber, error,setError }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value)=> {
    setSelectedNumber(value)
    setError("")
  }
  return (
    <Container>
      <p className="error">{error}</p>
      <div className="mapDiv">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .mapDiv {
    display: flex;
    gap: 24px;
  }
  .error{
    color: red;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
