import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e7ecf2;
  max-width: 428px;
  margin: 0 auto;
  padding-top: 88px;
  padding-bottom: 88px;
  padding-right: 90px;
  padding-left: 90px;
  margin-bottom: 30px;
  box-shadow: 5px 5px 10px rgba(18, 34, 54, 0.5);
`;
export const Description = styled.div`
  font-size: 15px;
  margin: 0 auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 30px;
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-bottom: 32px;
`;
export const Name = styled.p`
  font-size: 16px;
  color: #122236;
  font-weight: 700;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #f3f6f9;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e9f0;
  height: 74px;
  width: 84px;
`;

export const Quantity = styled.span`
  color: #122236;
  font-size: 16px;
  font-weight: 700;
`;
