import React, { FC, InputHTMLAttributes, useState } from 'react';
import './textInput.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const TextInput: FC<TextInputProps> = ({ value, onChange, error, ...rest }) => {
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
        className={`textInput__input ${error ? '--error' : ''}`}
        value={inputValue}
        onChange={handleInputChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;

