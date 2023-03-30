export default ({ config }) => ({
  ...config,
  output: {
    ...config.output,
    library: "grapesjs-bootstrap-icon",
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
