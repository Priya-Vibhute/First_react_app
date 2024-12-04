import { useCallback, useEffect, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numbersAllowed, characterAllowed]);

  // Use the effect to run the password generator when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);  // Ensure to only re-run the callback

  return (
    <div className="container border border-dark bg-warning p-5">
      <h3>Password Generator</h3>
      <input type="text" value={password} readOnly />
      <input
        type="range"
        min={6}
        max={15}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <label>Length: {length}</label>

      <div>
        <input
          type="checkbox"
          checked={numbersAllowed}
          onChange={() => setNumbersAllowed((prev) => !prev)}
        />
        <label>Include Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={characterAllowed}
          onChange={() => setCharacterAllowed((prev) => !prev)}
        />
        <label>Include Special Characters</label>
      </div>
    </div>
  );
}

export default PasswordGenerator;
