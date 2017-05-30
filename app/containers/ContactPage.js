// @flow

import { connect } from 'react-redux';
import React, { Component } from 'react';
import electron from 'electron';

const fs = electron.remote.require('fs');


class ContactPage extends Component {
  writeFile(content: string) {
    const { user } = this.props;
    //fs.writeFile(`C:/Users/jtrepka/Pictures/test.json`, content, (err) => {
    fs.writeFile(`./test.json`, `Your content: ${content}, your name: ${user.name}`, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
  }
  render() {
    return (
      <div className="contact">
        <div>mr@jay.com</div>
        <div>Contact us if you want to pay $$$</div>
        <button onClick={() => this.writeFile('Very Good')}>Write File</button>
        <style jsx>
          {
            `
            .contact {
              display: flex;
              flex: 1;
              flex-direction: column;
              padding: 50px;
              justify-content: space-around;
              align-items: center;
            }
            .contact div {
              font-size: 36px;
              text-align: center;
            }
            `
          }
        </style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(ContactPage);
