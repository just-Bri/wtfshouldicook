// From App.js
// user accounts on back burner for now
logIn = e => {
  e.preventDefault();
  this.setState({
    loggedIn: true
  });
};
logOut = e => {
  e.preventDefault();
  this.setState({
    loggedIn: false
  });
};

// Recipe.js picture
<section className="url-container">
  <label>Picture Url</label>
  <input
    type="text"
    onChange={this.handleChange}
    name="picture_url"
    value={this.state.picture_url}
  />
</section>;

// The below will be added once user accounts are implimented
{
  this.context.loggedIn ? (
    <>
      <a href="/account" className="top-account-button">
        Account
      </a>
      <a
        href="/"
        onClick={e => this.context.logOut(e)}
        className="top-logout-button"
      >
        Logout
      </a>
    </>
  ) : (
    <a
      href="/"
      onClick={e => this.context.logIn(e)}
      className="top-login-button"
    >
      Login
    </a>
  );
}
