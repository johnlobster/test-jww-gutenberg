import React from 'react';

interface moreProps {
  src: string[];
}
const ViewSource: React.FunctionComponent<moreProps> = (props) => {

  // State
  // const [myVar, updateMyVar] = React.useState(false);
  // Effect
//   React.useEffect((props) => { // if there is a variable, then hook runs when variable changes
//     // code
//     return ( // if a function is returned, it runs after component unmounts
//       function cleanup() {
//         // code
//       };
//     )
// });

return (
  <React.Fragment>
    <h2>Text source</h2>
    <code>
      {props.src.map((dataItem, index, array) => {
        return (
          <p>{dataItem}</p>
        )
      })
      }
    </code>
    
  </React.Fragment>
);

}

export default ViewSource;
