/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const metadata = {
  name: "test",
  description: "test",
  start_url: "/",
  icon: "src/assets/icon.png",
  firebaseConfig: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  }
};

module.exports = {
  siteMetadata: metadata,
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "src/assets"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: metadata,
    }
  ],
};
