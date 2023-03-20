import React from 'react';

interface moreProps {
  src: string[];
}
const EditableBlock: React.FunctionComponent<moreProps> = (props) => {


return (
  <React.Fragment>        
    <h2>Example editable block</h2>

    {props.src.map((dataItem, index, array) => {
      return (
        <p>{dataItem}</p>
      )})
    }
  </React.Fragment>
);

}

export default EditableBlock;
