# My Next.js Tailwind Eslint Airbnb Starter Template

### Description:

This is a starter template for building projects with Next.js, Tailwind CSS, and Eslint Airbnb configuration.

## Installation

Install my-project with npm

```bash
  npm i
```

## When you install the project, the following items are already set up:

[FONTS](https://linktodocumentation)<br />
[Tailwind css](https://tailwindcss.com/)<br />
[Framer-Motion](https://www.framer.com/motion/)<br />
[Eslint-config-next](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)<br />

## Instalation optional

```bash
  npm add eslint-config-prettier eslint-plugin-prettier prettier --save-dev
```

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
```

### Author:

# Hi, I'm Gregory! 👋

- [Linkedin](https://www.linkedin.com/in/grigory-maklakov-331a641ba/) Maklakov Hryhorii <br />
- [myWebsite](http://www.maklakovgrigory.com/) <br />
- [Instagram](https://www.instagram.com/grigoriimaklakov/) <br />
