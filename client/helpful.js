// Remember your client, server, lib, & public directories

// Template helper
Template.helpfulDemo.helpers({
  shush: function (str) {
    return str.toLowerCase();
  },

  capitalize: function (str) {
    return lodash.capitalize(str);
  },

  suffixer: function (str, suffix) {
    return str + suffix;
  }
});

// Global helper
Template.registerHelper('shout', function (str) {
  return `${str}!`;
});
