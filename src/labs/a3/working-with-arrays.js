import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JsonStringify from "./json-stringify";
import FindFunction from "./find-function";
import Findindex from "./find-index";
import FilterFunction from "./filter-function";

const WorkingWithArrays = () => {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];
  // console.log("Working With Arrays");

  let temp = "";
  for (var i = 0; i < numberArray1.length; i++) {
    temp += numberArray1[i];
  }
  //let tempfin = "numberArray1 = "+temp;
  let temp1 = "";
  for (var i = 0; i < stringArray1.length; i++) {
    temp1 += stringArray1[i];
  }
  //let temp1fin = "stringArray1 = "+temp1;
  let temp2 = "";
  for (var i = 0; i < variableArray1.length - 2; i++) {
    temp2 += variableArray1[i];
  }
  temp2 += temp + temp1;

  console.log("Working With Arrays");

  let tempc = "";
  for (var i = 0; i < numberArray1.length; i++) {
    tempc += numberArray1[i];
  }
  console.log("numberArray1 = " + tempc);
  let temp1c = "";
  for (var i = 0; i < stringArray1.length; i++) {
    temp1c += stringArray1[i];
  }
  console.log("stringArray1 = " + temp1c);
  let temp2c = "";
  for (var i = 0; i < variableArray1.length - 2; i++) {
    temp2c += variableArray1[i];
  }
  console.log("variableArray1 = " + temp2c + tempc + temp1c);

  return (
    <div>
      <h3>WorkingWithArrays</h3>
      numberArray1 = {temp}
      <br />
      stringArray1 = {temp1}
      <br />
      variableArray1 = {temp2}
      <br />
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <JsonStringify />
      <FindFunction />
      <Findindex />
      <FilterFunction />
    </div>
  );
};

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ["string1", "string2"];

let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1,
];

export default WorkingWithArrays;
