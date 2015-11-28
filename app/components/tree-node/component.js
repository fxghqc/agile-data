import Ember from 'ember';

export default Ember.Component.extend({
  hasChildren: function() {
    return this.get('node.children') && this.get('node.children').length > 0;
  }.property('node'),
  childLevel: function() {
    return this.get('level') + 1;
  }.property('level'),
  indentStyle: function() {
    // var padding = escapeCSS(this.get('level') * 20 + 'px');
    var padding = this.get('level') * 20 + 'px';
    return Ember.String.htmlSafe('margin-left: ' + padding);
  }.property('level')
});
