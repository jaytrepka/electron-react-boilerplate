// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const links = [{
  label: 'Contact',
  link: '/contact',
}, {
  label: 'About',
  link: '/about',
}, {
  label: 'Counter',
  link: '/counter',
}, {
  label: 'Homepage',
  link: '/homepage',
}, {
  label: 'User',
  link: '/user',
}, {
  label: 'Read USB devices',
  link: '/read',
}, {
  label: 'Login',
  link: '/login',
}];

export default class PageMenu extends Component {
  componentDidMount() {
    console.log('didMountHP');
  }

  render() {
    return (
      <div>
        {links.map(link => (
          <div className="link" key={link.label}>
            <Link to={link.link} style={{color: 'yellow'}}>{link.label}</Link>
          </div>
        ))}
        <style jsx>
        {
          `
          .link {
            padding: 20px;
          }
          `
        }
        </style>
      </div>
    );
  }
}
