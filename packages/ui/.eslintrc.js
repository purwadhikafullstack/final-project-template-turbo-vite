module.exports = {
  extends: ["custom/react-internal"],
  parser: "babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
};
