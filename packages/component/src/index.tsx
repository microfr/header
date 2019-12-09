import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./styles.local.scss";

const CREDIT_QUERY = gql`
  query {
    viewer {
      name
      id
      
    }
  }
`;

const _Header: React.FunctionComponent = () => {
  const { data, loading } = useQuery(CREDIT_QUERY, {
    variables: {
      id: "1"
    }
  });
  if (loading) return <div>Loading</div>;
  return (
    <header className="header">
      <h1 className="header__title">Microfr Bank</h1>
    </header>
  );
};

_Header.displayName = "Header";

export default React.memo(_Header);
