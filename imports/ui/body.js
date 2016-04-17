/*jshint esversion: 6 */

import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});
