import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { converterUtils } from '../../utils/converterUtils';
import { apiUtils } from '../../utils/apiUtils';

const DropDownSearch = ({
  initialOptions,
  placeholder,
  inputQuery,
  setInputQuery,
  value,
  labelColor
}) => {
  const [options, setOptions] = useState([...initialOptions]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState();

  useEffect(() => {
    const search = async (query) => {
      const prevOpts = options;
      setIsLoading(true);
      const response = await apiUtils.fetchData(
        `/ingredient/autocomplete/${query}`
      );
      const opts = response.map((option) => ({
        key: option.name,
        value: option.name,
        text: converterUtils.toTitleCase(option.name)
      }));
      setOptions([...prevOpts, ...opts]);
      setIsLoading(false);
    };
    query && search(query);
  }, [query]);

  const handleChange = (event, { value }) => {
    // Add the choices to the input query.
    const key = converterUtils.camelize(placeholder);
    setInputQuery({ ...inputQuery, [key]: value });
    setOptions([
      { key: value.join(), text: value.join(), value: value.join() }
    ]);
  };

  const handleSearchChange = async (event, { searchQuery }) =>
    searchQuery && setQuery(searchQuery);

  const handleAddition = (e, { value }) => {
    setOptions([...options, { text: value, value }]);
  };

  const renderLabel = (label) => ({
    color: `${labelColor}`,
    content: `${label.text}`
  });

  return (
    <Dropdown
      loading={isLoading}
      disabled={isLoading}
      scrolling
      closeOnChange
      allowAdditions
      additionLabel=''
      placeholder={placeholder}
      multiple
      search
      selection
      options={options}
      value={value}
      renderLabel={renderLabel}
      onChange={handleChange}
      onAddItem={handleAddition}
      onSearchChange={handleSearchChange}
      noResultsMessage={null}
    />
  );
};

export default DropDownSearch;
