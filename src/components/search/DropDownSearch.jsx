import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { converterUtils } from '../../utils/converterUtils';

const DropDownSearch = ({
  initialOptions,
  placeholder,
  inputQuery,
  setInputQuery,
  value,
  labelColor
}) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState();

  // useEffect(() => {
  //   const search = async (query) => {
  //     const prevOpts = options;
  //     setIsLoading(true);
  //     const response = await apiUtils.fetchData(
  //       `/ingredient/autocomplete/${query}`
  //     );
  //     const opts = response.map((option) => ({
  //       key: option.name,
  //       value: option.name,
  //       text: converterUtils.toTitleCase(option.name)
  //     }));
  //     setOptions([...prevOpts, ...opts]);
  //     setIsLoading(false);
  //   };
  //   query && search(query);
  // }, [query]);

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
