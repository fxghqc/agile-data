import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this._super(...arguments);
    this.$(".button-collapse.navbar-collapse").sideNav({
      edge: 'right'
    });
    return true;
  }
});
