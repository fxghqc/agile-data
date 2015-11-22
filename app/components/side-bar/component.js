import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this._super(...arguments);
    this.$(".button-collapse.sidenav-collapse").sideNav();
    return true;
  }
});
