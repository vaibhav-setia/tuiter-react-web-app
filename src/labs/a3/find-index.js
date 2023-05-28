const Findindex = () => {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string3"];

  const string3IndexfourIndex = numberArray1.findIndex((a) => a === 3);
  const string3Index = stringArray1.findIndex((a) => a === "string3");

  return (
    <div>
      <h3>Findindex function</h3>
      fourIndex = {string3IndexfourIndex} <br />
      string3Index = {string3Index} <br />
    </div>
  );
};

export default Findindex;
