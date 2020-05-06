import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropDownSearch = ({
  options,
  placeholder,
  setInputQuery,
  query,
  value
}) => {
  return (
    <Dropdown
      placeholder={placeholder}
      fluid
      multiple
      search
      selection
      value={value}
      options={options}
      onChange={(event, data) => {
        const key = placeholder.toLowerCase();
        setInputQuery({ ...query, [key]: data.value });
      }}
    />
  );
};

export default DropDownSearch;
