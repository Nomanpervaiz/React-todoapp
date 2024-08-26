import React from 'react';
import { Input } from 'antd';
const InputField = ({placeHolder,value ,onChange}) => <Input className='inputStyle' value={value} placeholder={placeHolder} onChange={onChange} />;
export default InputField;