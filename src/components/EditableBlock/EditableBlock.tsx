import React from 'react';

interface moreProps {
  src: string[];
}
const EditableBlock: React.FunctionComponent<moreProps> = (props) => {


return (
  <React.Fragment>
    {props.src.map((dataItem, index, array) => {
      return (
        <p>dataItem</p>
      )})
    }
  </React.Fragment>
);

}

export default EditableBlock;
