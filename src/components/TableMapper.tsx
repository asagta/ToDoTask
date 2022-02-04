import React, { useEffect, useState } from 'react';

function TableMapper({ dta, filts, setFilts }:any) {
  // console.log("STRING::",dta);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (filts.length === 0) setChecked(false);
  }, [filts]);
  const checkFilterableItems = (value:any) => {
    setChecked(value.target.checked);
    if (value.target.checked) {
      // push items to array
      filts.push(value.target.value);
      setFilts([...filts]);
    } else {
      const FiltsNew = filts.filter((item:any) => item !== value.target.value);
      setFilts([...FiltsNew]);
    }
  };
  return (
    <tr>
      <td><input className="form-check-input" type="checkbox" value={dta.id} onChange={(val) => checkFilterableItems(val)} checked={checked} /></td>
      <td>{dta.id}</td>
      <td>{dta.userId}</td>
      <td>{dta.title}</td>
      <td>{`${dta.completed}`}</td>

    </tr>
  );
}

export default TableMapper;
