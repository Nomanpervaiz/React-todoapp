import React from 'react';
import { Button, Flex } from 'antd';
const MyButton = ({name,onClick,icon,className}) => (
  <Flex gap="small" wrap>
    <Button className={className}  onClick={onClick} type="primary">{name ? name : icon }</Button>
  </Flex>
);
export default MyButton;