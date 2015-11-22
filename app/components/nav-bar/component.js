import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$(".button-collapse.navbar-collapse").sideNav({
      edge: 'right'
    });
    return true;
  }
});
