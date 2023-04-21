import React, { FC, InputHTMLAttributes, useState } from 'react';
import './textInput.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput: FC<TextInputProps> = ({ value, onChange, ...rest }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className='textInput'>
      <input
        className='textInput__input'
        value={inputValue}
        onChange={handleInputChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;

