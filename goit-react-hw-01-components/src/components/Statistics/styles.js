import styled from "styled-components";

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Section = styled.section`
  max-width: 400px;
  max-height: 252px;
  background-color: #eff3f6;
  margin: 0 auto;
  padding: 60px 50px;
  margin-bottom: 30px;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  text-transform: uppercase;
  color: #122236;
  background-color: #ffffff;
  padding: 30px 78px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;
const Item = styled.li`
  width: 60px;
  height: 66px;
  background-color: ${() => generateColor()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7cacc;
`;
export { generateColor, Title, Section, List, Item };
