// React.Children，可以处理props.children
// React.cloneElement(element, [props], [...children])。以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。
import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

// // 想封装一下Col。并且在Col中直接给children的所有元素赋style值 height: 100%。大大减少了开发者心智负担
const MyCol = (props) => {
  const { children, ...otherProps } = props
  return (
    <Col
      {...otherProps}
    >
      { 
        React.Children.map(children, (child) => {
          return React.cloneElement(
            child,
            { style: { ...child.props.style, height: '100%' } }
          )
        })
      }
    </Col>
  )
}