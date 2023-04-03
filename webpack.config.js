export default ({ config }) => ({
  ...config,
  output: {
    ...config.output,
    library: "gjs-bootstrap-icon",
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
