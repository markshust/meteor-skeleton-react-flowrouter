import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import App from './App';
import Welcome from '../components/Welcome';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      content: () => <Welcome />,
    });
  },
});
