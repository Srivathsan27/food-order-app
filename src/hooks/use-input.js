import { useState } from "react";

export default function useInput(config) {
  const [field, setField] = useState(config.default);
  const [fieldTouched, setFieldTouched] = useState(false);

  const onChangeHandler = (event) => {
    setField(event.target.value);
  };

  let isFieldValid = !fieldTouched
    ? !config.validate(field)
    : config.validate(field);

  const onBlurHandler = () => {
    // console.log("fieldTouched", fieldTouched);
    // isFieldValid = config.validate(field);
    setFieldTouched(true);
  };

  return {
    field,
    isFieldValid,
    fieldTouched,
    onChangeHandler,
    onBlurHandler,
  };
}
