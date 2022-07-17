import React from "react";
import { initializeApp } from "firebase/app";
import { Main } from "../components/Main";
import { graphql } from "gatsby";
import "../scss/global.scss";

type IndexProps = {
  data: IQueryData
};

const Index = ({data}: IndexProps): JSX.Element => {
  const app = initializeApp(data.site.siteMetadata.firebaseConfig);
  return <Main/>;
};
export default Index;

interface IQueryData {
  site: {
    siteMetadata: {
      firebaseConfig: {
        apiKey: string,
        authDomain: string,
        projectId: string,
        storageBucket: string,
        messagingSenderId: string,
        appId: string,
      }
    }
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        firebaseConfig {
          apiKey,
          authDomain,
          projectId,
          storageBucket,
          messagingSenderId,
          appId
        }
      }
    }
  }
`;