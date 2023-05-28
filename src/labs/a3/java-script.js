import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";
import Ternary from "./ternary-operator";
import WorkingWithArrays from "./working-with-arrays";
import WorkingWithFunctions from "./working-functions";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
import TemplateLiterals from "./template-literals";
function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <Ternary />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <TemplateLiterals />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}
export default JavaScript;
