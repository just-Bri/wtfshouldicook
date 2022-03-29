// From App.js
// user accounts on back burner for now
logIn = (e) => {
  e.preventDefault();
  this.setState({
    loggedIn: true,
  });
};
logOut = (e) => {
  e.preventDefault();
  this.setState({
    loggedIn: false,
  });
};

// Recipe.js picture
<section>
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
      <a href="/account">Account</a>
      <a href="/" onClick={(e) => this.context.logOut(e)}>
        Logout
      </a>
    </>
  ) : (
    <a href="/" onClick={(e) => this.context.logIn(e)}>
      Login
    </a>
  );
}
