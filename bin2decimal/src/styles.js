import styled from "styled-components";

export const StyledForm = styled.form`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
  width: 70%;
  background: radial-gradient(ellipse at center, #f2f9fe 0%, #d6f0fd 100%);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  margin: 12px;
  font-size: 30px;
  font-family: "Garamond";
`;

export const BinaryTextInput = styled.input`
  width: 50%;
  font-size: 30px;
  margin-left: 11px;
  margin-bottom: 11px;
  border: 1px solid #a3a3a3;
  padding: 11px;
  border-radius: 3px;
  background: white;
  outline: none;

  &:focus {
    border: 1px solid gray;
  }
`;

export const DecimalTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  background: white;
  outline: none;
`;

export const Button = styled.button`
  width: 35%;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 2px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    border: 1px solid orange;
    color: orange;
  }
`;
