if (Meteor.isClient) {
  /* ES2014
    Template.dollarDemo.helpers({
      cents: function (str) {
        return str + '.00';
      },

      capitalize: function (str) {
        return '$' + str;
      }
    });
  */

  Template.dollarDemo.helpers({
    cents: str => str + '.00',
    usd: str => '$' + str
  });
}
