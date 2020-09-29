const withCSS = require("@zeit/next-css");
// module.exports = withPlugins(
//   [
//     withCSS,
//     withPWA({
//       pwa: {
//         dest: "public",
//       },
//     }),
//   ],
//   {
//     env: {
//       AIRTABLE_API_KEY: "key5VOizF1IAFcKeD",
//       AIRTABLE_BASE_ID: "appf7Dc5IKom0wArV",
//       FAUNA_SERVER_SECRET: "fnAD26na28ACATnSJT0UD93sy_ft8gNx6Zt7gNFm",
//       PORT: 4532,
//     },
//   }
// );

module.exports = withCSS({
  env: {
    AIRTABLE_API_KEY: "key5VOizF1IAFcKeD",
    AIRTABLE_BASE_ID: "appf7Dc5IKom0wArV",
    FAUNA_SERVER_SECRET: "fnAD26na28ACATnSJT0UD93sy_ft8gNx6Zt7gNFm",
    PORT: 4532,
  },
});
