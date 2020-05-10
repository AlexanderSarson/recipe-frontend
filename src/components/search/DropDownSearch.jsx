import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { converterUtils } from '../../utils/converterUtils';

const DropDownSearch = ({
  id,
  initialOptions,
  placeholder,
  inputQuery,
  setInputQuery,
  value,
  labelColor
}) => {
  const handleChange = (event, { value }) => {
    const key = converterUtils.camelize(placeholder);
    setInputQuery({ ...inputQuery, [key]: value });
  };

  const renderLabel = (label) => ({
    color: `${labelColor}`,
    content: `${label.text}`
  });

  return (
    <Dropdown
      id={id}
      scrolling
      closeOnChange
      placeholder={placeholder}
      multiple
      search
      selection
      options={initialOptions}
      value={value}
      renderLabel={renderLabel}
      onChange={handleChange}
    />
  );
};

export default DropDownSearch;
