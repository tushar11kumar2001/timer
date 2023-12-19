import "./Main.css";
import { useState } from "react";

const Main = () => {
  const [mint, setMint] = useState("");
  const [sec, setSec] = useState("");
  const [mintCopy, setMintCopy] = useState("");
  const [secCopy, setSecCopy] = useState("");

  var a = mint;
  // const[b,setb] = useState(sec);
  let obj = {
    b: sec,
  };

  return (
    <div className="mainframe">
      <div className="body">
        <div className="time border flex">
          <input
            type="text"
            className="mint input"
            placeholder="Minutes"
            value={mint}
            onChange={(e) => {
              if (e.target.value >= "0" && e.target.value <= "9") {
                setMint(e.target.value);
                setMintCopy(e.target.value);
              }
            }}
          ></input>
          <input
            type="text"
            className="sec input"
            placeholder="Seconds"
            value={sec}
            onChange={(e) => {
              if (e.target.value >= "0" && e.target.value <= "9") {
                setSec(e.target.value);
                setSecCopy(e.target.value);
              }
            }}
          ></input>
        </div>
        <div className="timer border flex">
          <h3 className="text">Timer :</h3>
          <div className="input d1 flex">
            {mintCopy}:{secCopy}
          </div>
        </div>
        <div className="btnspace flex border">
          <button
            className="btn start"
            onClick={() => {
              function z(obj) {
                for (let j = a; j >= "0"; j--) {
                  function t(j, obj) {
                    setTimeout(() => {
                      console.log("start", j);
                      setMintCopy(j);
                      if (j < a) {
                        obj.b = "60";
                      }
                    }, a * obj.b * 1000 - j * obj.b * 1000);
                  }
                  t(j, obj);
                  setTimeout(() => {
                    xyz(obj);
                  }, a * obj.b * 1000 - j * obj.b * 1000);
                }
              }
              z(obj);
              function xyz(obj) {
                for (let i = obj.b; i >= "0"; i--) {
                  function x(i) {
                    setTimeout(() => {
                      setSecCopy(i);
                    }, obj.b * 1000 - i * 1000);
                  }

                  x(i);
                  console.log(i);
                }
                console.log("xyz called b = ", obj.b);
              }
            }}
          >
            Start
          </button>
          <button
            className="btn reset"
            onClick={() => {
              setMint("");
              setSec("");
              setMintCopy("");
              setSecCopy("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
