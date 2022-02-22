// import React from "react";
// import ButtonExampleButton from "./ButtonExampleButton";
// import ListExampleIcon from "./ListEExampleIcon";

// const SemanticUi = () => {
//   return (
//     <div>
//       <h1>Button</h1>
//       <ButtonExampleButton />
//       <h1>Lists With Icons</h1>

//       <ListExampleIcon />
//     </div>
//   );
// };

// export default SemanticUi;
import React from "react";
import { Container } from "semantic-ui-react";
import ButtonExampleButton from "./ButtonExampleButton";
import GridExampleStretched from "./Grid";
import Inputs from "./Inputs";
import ListExampleIcon from "./ListEExampleIcon";
import StepExampleOrdered from "./Steps";

const SemanticUi = () => (
  <Container>
    <h1>
      <b>Buttons</b>
    </h1>
    <ButtonExampleButton />
    <br />
    <h1>
      <b>Lists With Icons</b>
    </h1>
    <br />
    <ListExampleIcon />
    <br />
    <h1>
      <b>Loading</b>
    </h1>
    <p>(An icon input field can show that it is currently loading data.)</p>
    <br />
    <Inputs />
    <br />
    <h1>
      <b>Steps</b>
    </h1>
    <br />
    <StepExampleOrdered />
    <br />
    <h1>
      <b>Grid</b>
    </h1>
    <br />
    <GridExampleStretched />
  </Container>
);

export default SemanticUi;
