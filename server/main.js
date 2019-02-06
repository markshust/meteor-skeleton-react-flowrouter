import React from 'react';
import { renderToString } from 'react-dom/server';
import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';
import App from '/imports/ui/App';

Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`);
});

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById('app', renderToString(<App />));
});
