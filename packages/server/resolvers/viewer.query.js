const fetch = require("node-fetch");

exports.getViewer = async (parent, { id }, { token }) => {
  var query = `query {
        viewer {
            id
            firstName
            lastName
        }
      }`;
    try {
      console.log(token)
        const data = await fetch("http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: token
          },
          body: JSON.stringify({
            query
          })
        });
        const {data: result} = await data.json();
        console.log(data)
        return result.creditScore;
    } catch(err) {
        throw new Error(err)
    }
};
