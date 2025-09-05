import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../styles/loginStyle.css'

const Inputfield = ({ placeholder, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === 'password';
  const inputType = isPasswordField && showPassword ? 'text' : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='input-group'>
      <input type={inputType} placeholder={placeholder} name={name} value={value} onChange={onChange} />

      {
        isPasswordField && (
          <span className='eye-icon' onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )
      }

      {error && <p className='error'>{error}</p>}

    </div>
  )
}

export default Inputfield