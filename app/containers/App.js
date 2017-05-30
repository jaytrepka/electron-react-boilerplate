// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import styles from './App.css';
import PageMenu from './PageMenu';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.menu}>
          <PageMenu />
        </div>
        <div className={styles.page}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
