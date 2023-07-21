import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    height: 100%;
    color: var(--color-gray-600);
  }

  :root {
    --color-white: #ffffff;
    --color-black: #000000;

    --color-gray-25: #fcfcfd;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f2f4f7;
    --color-gray-200: #eaecf0;
    --color-gray-300: #d0d5dd;
    --color-gray-400: #98a2b3;
    --color-gray-500: #667085;
    --color-gray-600: #475467;
    --color-gray-700: #344054;
    --color-gray-800: #1d2939;
    --color-gray-900: #101828;

    --color-purple-25: #fcfaff;
    --color-purple-50: #f9f5ff;
    --color-purple-100: #f4ebff;
    --color-purple-200: #e9d7fe;
    --color-purple-300: #d6bbfb;
    --color-purple-400: #b692f6;
    --color-purple-500: #9e77ed;
    --color-purple-600: #7f56d9;
    --color-purple-700: #6941c6;
    --color-purple-800: #53389e;
    --color-purple-900: #42307d;

    --color-red-25: #fffbfa;
    --color-red-50: #fef3f2;
    --color-red-100: #fee4e2;
    --color-red-200: #fecdca;
    --color-red-300: #fda29b;
    --color-red-400: #f97066;
    --color-red-500: #f04438;
    --color-red-600: #d92d20;
    --color-red-700: #b42318;
    --color-red-800: #912018;
    --color-red-900: #7a271a;

    --shadow-purple-xs: 0px 0px 0px 4px var(--color-purple-100), 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-gray-xs:  0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-red-xs:  0px 0px 0px 4px var(--color-red-100), 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  }

  input {
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
  }

  #root {
    height: 100%;
  }
 
`;

export default GlobalStyles;
