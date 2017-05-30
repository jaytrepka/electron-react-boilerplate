// @flow

import React, { Component } from 'react';
import { logIn } from '../services/userService';
import egg from '../../resources/image/egg.png';

type State = {
  status: number,
};

class LoginPage extends Component {
    constructor() {
      super();
      this.state = {
        status: 0,
      };
    }

  handleSubmit(e) {
    e.preventDefault();
    const inputs: any = this.form.elements;
    logIn(inputs.email.value, inputs.password.value).then((status) => {
      this.setState(() => ({
        status,
      }));
    });
  }

  render() {
    const { status } = this.state;
    return (
      <div>
      <img src={egg} alt="egg" />
      <div>
        Use data to Scooby to login
      </div>
      <form
        method="post"
        ref={c => {
          this.form = c;
        }}
        noValidate
        onSubmit={e => this.handleSubmit(e)}
      >
            <input
              name="email"
              type="email"
              id="email"
              label="email"
              placeholder="email"
            />
            <input
              name="password"
              id="password"
              label="password"
              placeholder="password"
            />
            <button type="submit">
              LogIn
            </button>
      </form>
      <div>
        Your request - status: {status !== 0 ? status : '-'}
      </div>
      </div>
    );
  }
}


export default LoginPage;
