import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./styles.local.scss";

const VIEWER_QUERY = gql`
  query {
    viewer {
      firstName
      lastName
      id
    }
  }
`;

const _Header: React.FunctionComponent = () => {
  const [user, setUser] = useState(null);
  const { loading } = useQuery(VIEWER_QUERY, {
    onCompleted: ({ viewer }) => {
      setUser(viewer);
    },
    onError: err => {
      throw err;
    }
  });
  if (loading) return <div>Loading</div>;
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">Microfr Bank</h1>
      </div>
      {user && (
        <div className="header__right">
          {user.firstName} {user.lastName}
        </div>
      )}
    </header>
  );
};

_Header.displayName = "Header";

export default React.memo(_Header);
