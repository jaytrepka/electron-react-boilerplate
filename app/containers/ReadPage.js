// @flow
// document

import { connect } from 'react-redux';
import React, { Component } from 'react';
//import usb from 'usb';

class ReadPage extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown(key) {
    if (key.key === 'x') {
      console.log('key', key);
      alert('fuck you');
    }
  }

  readDevices() {
    // const devices = usb.getDeviceList();
    // console.log('dev', devices);
  }
  render() {
    return (
      <div className="contact">
        <div>mr@jay.com</div>
        <div>Contact us if you want to pay $$$</div>
        <button onClick={() => this.readDevices()}>Read Devices</button>
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

export default connect(mapStateToProps)(ReadPage);
