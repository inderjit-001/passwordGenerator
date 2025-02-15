import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use ref
  const passwordRef = useRef(null);

  const copyPassToClip = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  };

  // method for pass generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}:><?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass);
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // calling pass generator method
  useEffect(
    () => passwordGenerator(),
    [length, numberAllowed, charAllowed, passwordGenerator]
  );

  return (
    <>
      <div className="w-2xl mx-auto bg-gray-500 flex flex-col justify-center py-3 items-center rounded-lg mt-5 gap-2.5">
        <h2>Password Generator</h2>
        <div className="bg-white rounded overflow-hidden">
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly
            className="outline-0 w-lg"
            ref={passwordRef}
          />
          <button
            className="btn outline-0 bg-blue-600 px-2 py-1 text-base"
            onClick={copyPassToClip}
          >
            Copy
          </button>
        </div>

        <div className="flex gap-3">
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Lenght: {length}</label>

          <input
            type="checkbox"
            onChange={() => setNumberAllowed((prev) => !prev)}
            id="num"
          />
          <label htmlFor="num">Number Allowed</label>

          <input
            type="checkbox"
            onChange={() => setCharAllowed((prev) => !prev)}
            id="char"
          />
          <label htmlFor="char">Char Allowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
