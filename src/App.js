import "./App.css";
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "swordfish",
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );

    const contactInfo = (
      <ul>
        <li>GreatJobHacker@example.com</li>
        <li>Password for Everything: Applesauce777</li>
        <li>Lunch Code: 7815</li>
        <li>Phone Number: 209.596.9674</li>
        <li>Have A Great Day :)</li>
      </ul>
    );

    return (
      <div id="authorization">
        {this.state.authorized === true ? (
          <h1>You Accessed Nate's Personal Information!</h1>
        ) : (
          <h1>Enter the Correct Password</h1>
        )}

        {this.state.authorized === true ? contactInfo : login}
      </div>
    );
  }
}

function App() {
  return <Contact />;
}

export default App;
