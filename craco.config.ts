// Setup 
const CracoAlias = require("craco-alias");

// Exported Module - rewritten create-react-app config
// (Create React App Configuration Override)
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