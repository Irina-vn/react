import styled from "styled-components";

const List = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  box-shadow: 5px 5px 10px rgba(18, 34, 54, 0.5);
  margin-bottom: 10px;
  min-height: 60px;
  min-width: 200px;
`;
const Span = styled.span`
  position: relative;
  padding-left: 24px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: 5px;
    background-color: ${(props) => (props.online ? "green" : "red")};
  }
`;

const Img = styled.img`
  border-radius: 10px;
`;
const Name = styled.p`
  color: #122236;
  padding-left: 10px;
`;
export { List, Item, Span, Img, Name };
