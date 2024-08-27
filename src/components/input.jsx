import React from 'react';
import { Input } from 'antd';
const InputField = ({placeHolder,value ,onChange,disable}) => <Input className='inputStyle' disabled={disable} value={value} placeholder={placeHolder} onChange={onChange} />;
export default InputField;