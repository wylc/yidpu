import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//https://github.com/ant-design/ant-design/issues/10319
//解决高版本chrome不显示名称bug
// var uploadUtils = require('antd/es/upload/utils');
// uploadUtils.fileToObject = (file) => {
//     const fileDuplicated = {};
//     if (file && file.__proto__) {
//         Object.keys(file.__proto__).forEach(key => {
//             fileDuplicated[key] = file[key];
//         });
//     }
//     return {
//         // file: uid
//         ...file,
//         // fileDuplicated: other `File` props.
//         ...fileDuplicated,

//         percent: 0,
//         originFileObj: file,
//     };
// };
// require('antd/dist/antd.min.css');
//require('antd/dist/antd.less');
//import 'antd/dist/antd.less';
import App from './index.js';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);