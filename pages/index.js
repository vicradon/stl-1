import Head from "next/head";

const { query: q, Client } = require("faunadb");

const Index = () => {
  const [state, setState] = React.useState({
    info: "",
  });
  const [latest, setLatest] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const client = new Client({
    secret: "fnAD26na28ACATnSJT0UD93sy_ft8gNx6Zt7gNFm",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    client
      .query(
        q.Create(q.Collection("sent_items"), { data: { text: state.info } })
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const getLatest = () => {
    return client.query(
      q.Get(
        q.Select(
          ["data", 0],
          q.Reverse(q.Paginate(q.Documents(q.Collection("sent_items"))))
        )
      )
    );
  };

  React.useEffect(() => {
    getLatest().then((text) => {
      setLatest(text.data.text);
    });
  });

  return (
    <React.Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./manifest.json" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <nav className="container">
        <h3>Send to laptop</h3>
      </nav>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="info">Text to send</label>
          <textarea
            className="u-full-width"
            placeholder="I'm still facing the issue..."
            id="info"
            name="info"
            value={state.info}
            onChange={handleChange}
          ></textarea>
          <input className="button-primary" type="submit" value="Submit" />
          <p style={{ color: "green" }}>{success}</p>
          <p style={{ color: "red" }}>{error}</p>
        </form>

        <div style={{ marginTop: "3rem" }}>{latest}</div>
      </div>
    </React.Fragment>
  );
};

export default Index;
