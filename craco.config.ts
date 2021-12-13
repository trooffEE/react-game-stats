const CracoAlias = require("craco-alias");

export default module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@": "./src",
        }
      }
    }
  ],
};