import React, { useState } from "react";
import ReactDom from "react-dom";

import {
  StyledForm,
  BinaryTextInput,
  Label,
  Button,
  DecimalTextInput,
  Field,
} from "./styles";

function App() {
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage("You must enter either with 0 or 1");
      return;
    }
    setErrorMessage("");

    const reversedBinaryText = binaryText.split("").map(Number).reverse();

    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );
    setDecimalText(result);
  };
  return (
    <>
      <h1>Binary 2 Decimal Converter</h1>

      <StyledForm onSubmit={submit}>
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        <br />
        <Field>
          <Label>Binary Input</Label>
          <div>
            <BinaryTextInput
              autoComplete="off"
              type="text"
              name="binary"
              placeholder="Enter 0 or 1"
              value={binaryText}
              onChange={(e) => setBinaryText(e.target.value)}
            />
            <Button type="submit">Convert</Button>
          </div>
        </Field>
        <Field>
          <Label>Decimal Output</Label>
          <DecimalTextInput
            type="text"
            name="decimal"
            value={decimalText}
            disabled
          />
        </Field>
      </StyledForm>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
