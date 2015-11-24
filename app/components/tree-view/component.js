import Ember from 'ember';

export default Ember.Component.extend({
  hasChildren: function() {
    return this.get('node.children') && this.get('node.children').length > 0;
  }.property('tree')
});
