import { useState, useEffect } from "react";
import CurrencySelect from "./components/CurrencySelect";
import InputCurrency from "./components/InputCurrency";
import { Button } from "./components/Button";
import "./styles.css";

export default function App() {
  const [fromSelect, setFromSelect] = useState(`USD`);
  const [toSelect, setToSelect] = useState(`EUR`);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [input, setInput] = useState(1);
  const [result, setResult] = useState("Exchange");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (data) {
      setResult(`${data.rates[toSelect]} ${toSelect}`);
    }
  }, [data, toSelect]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${fromSelect}&to=${toSelect}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [input, toSelect, fromSelect]);
  return (
    <div className="container">
      <div className="currency-box">
        <h1 className="title">Currency Converter</h1>

        <InputCurrency className={"input"} setInput={setInput} input={input} />
        <div className="select-box">
          <CurrencySelect
            className={"converter-form"}
            setFromSelect={setFromSelect}
            setToSelect={setToSelect}
          />
        </div>

        <p className="output">{result}</p>
      </div>
    </div>
  );
}
