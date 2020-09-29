import sendToAirtable from "../functions/send-to-airtable";

const Index = () => {
  const [state, setState] = React.useState({
    email: "",
    phone: "",
    supportPin: "",
    category: "",
    moreInfo: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendToAirtable(state)
      .then((res) => {
        return res.json();
      })
      .then(() => {
        setSuccess("saved to db");
      })
      .catch((error) => {
        console.error(error);
        // setError(error);
      });
  };
  return (
    <React.Fragment>
      <nav className="container">
        <h3>Demo company</h3>
      </nav>
      <div className="container">
        <h4>Lay a complaint</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="email">Your email</label>
              <input
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="email"
                name="email"
                required
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="six columns">
              <label htmlFor="phone">Phone</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="9274937434"
                id="phone"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="six columns">
              <label htmlFor="support-pin">Support pin</label>
              <input
                className="u-full-width"
                type="text"
                placeholder="2482"
                id="support-pin"
                name="supportPin"
                value={state.supportPin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="six columns">
              <label htmlFor="category">Complaint category</label>
              <select
                required
                className="u-full-width"
                id="category"
                name="category"
                value={state.category}
                onChange={handleChange}
              >
                <option value="unfair-treatment">Unfair treatment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <label htmlFor="more-info">More info</label>
          <textarea
            className="u-full-width"
            placeholder="I'm still facing the issue..."
            id="more-info"
            name="moreInfo"
            value={state.moreInfo}
            onChange={handleChange}
          ></textarea>
          <input className="button-primary" type="submit" value="Submit" />
          <p style={{ color: "green" }}>{success}</p>
          <p style={{ color: "red" }}>{error}</p>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Index;
