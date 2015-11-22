import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$(".button-collapse.sidenav-collapse").sideNav();
    return true;
  }
});
