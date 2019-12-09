import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ErrorBoundary from "@microfr/error-boundary";
import Loader from "./Loader";

interface Props {
  namespace: string;
  /*
  URI of GraphQL server to be passed into apollo client.
  */
  uri: string;
}

const _LoaderWrapper: React.FunctionComponent<Props> = ({ uri, ...props }) => {
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    const newClient = new ApolloClient({
      uri
    });
    setClient(newClient);
  }, []);

  return (
    <ErrorBoundary>
      {client && (
        <ApolloProvider client={client}>
          <Loader {...props} />
        </ApolloProvider>
      )}
    </ErrorBoundary>
  );
};
_LoaderWrapper.displayName = "LoaderWrapper";

export default React.memo(_LoaderWrapper);
