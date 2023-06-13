function App() {
  const [calculation, setCalculation] = React.useState("");
  const [result, setResult] = React.useState(""); 

  const clearDisplay = () => {
    setCalculation("0");
    setResult("0");
  };


  const handleNumberClick = (event) => {
    const number = event.target.textContent;
    if (result !== "") {
      setCalculation(number);
      setResult("");
    } else {
      if (calculation === "0") {
        if (number !== "0" && number !== ".") {
          setCalculation(number);
        }
      } else {
        const lastOperatorIndex = calculation.search(/[-+*/]/g);
        const lastNumber = calculation.slice(lastOperatorIndex + 1);
        if (lastNumber === "0" && number === "0") {
          // Evitar agregar más ceros si ya hay uno al final
          return;
        } else if (lastNumber === "0" && !lastNumber.includes(".")) {
          // Reemplazar el último cero con el nuevo número
          setCalculation((prevCalculation) => prevCalculation.slice(0, -1) + number);
        } else if (lastNumber.includes(".") && number === ".") {
          // Evitar agregar otro punto si ya hay uno en el último número
          return;
        } else {
          setCalculation((prevCalculation) => prevCalculation + number);
        }
      }
    }
  };
  
  const handleOperatorClick = (event) => {
    const operator = event.target.textContent;
    if (result !== "") {
      if (operator === "x") {
        setCalculation(result + "*");
        setResult("");
      } else {
        setCalculation(result.toString() + operator);
        setResult("");
      }
    } else {
      const lastChar = calculation.slice(-1);
      if (lastChar === "*" || lastChar === "/" || lastChar === "+" || lastChar === "-") {
        setCalculation((prevCalculation) => prevCalculation.slice(0, -1) + operator);
      } else {
        setCalculation((prevCalculation) => prevCalculation + operator);
      }
    }
  };
  
  const evaluateCalculation = () => {
    let finalResult;
    try {
      finalResult = eval(calculation);
      if (!Number.isFinite(finalResult)) {
        finalResult = "Error";
      }
    } catch (error) {
      finalResult = "Error";
    }
    setCalculation(finalResult.toString());
    setResult(parseFloat(finalResult));
  };

  const handleEqualsClick = () => {
    evaluateCalculation();
  };
  

  return (
    <div>
    <div className="container">
      <div className="grid">
        <div className="padButton dis display" id="display">
  <span className="display-text">{calculation !== "" ? calculation.replace(/\*/g, "x") : "0"}</span>
        </div>
        <div className="padButton ac" onClick={clearDisplay} id="clear">
          AC
        </div>
        <div className="padButton div op" onClick={handleOperatorClick} id="divide">
          /
        </div>
        <div className="padButton mul op" onClick={handleOperatorClick} id="multiply">
          x
        </div>
        <div className="padButton seven" onClick={handleNumberClick} id="seven">
          7
        </div>
        <div className="padButton eight" onClick={handleNumberClick} id="eight">
          8
        </div>
        <div className="padButton nine" onClick={handleNumberClick} id="nine">
          9
        </div>
        <div className="padButton sub op" onClick={handleOperatorClick} id="subtract">
          -
        </div>
        <div className="padButton four" onClick={handleNumberClick} id="four">
          4
        </div>
        <div className="padButton five" onClick={handleNumberClick} id="five">
          5
        </div>
        <div className="padButton six" onClick={handleNumberClick} id="six">
          6
        </div>
        <div className="padButton add op" onClick={handleOperatorClick} id="add">
          +
        </div>
        <div className="padButton one" onClick={handleNumberClick} id="one">
          1
        </div>
        <div className="padButton two" onClick={handleNumberClick} id="two">
          2
        </div>
        <div className="padButton three" onClick={handleNumberClick} id="three">
          3
        </div>
        <div className="padButton equal" onClick={handleEqualsClick} id="equals">
          =
        </div>
        <div className="padButton zero" onClick={handleNumberClick} id="zero">
          0
        </div>
        <div className="padButton dot" onClick={handleNumberClick} id="decimal">
          .
        </div>
      </div>
    </div>
    <p>By LuSCC</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
