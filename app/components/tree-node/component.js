import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['collection-item'],

  openChildren: false,
  showOprs: false,
  hasChildren: Ember.computed('node', function() {
    return this.get('node.children') && this.get('node.children').length > 0;
  }),
  childLevel: Ember.computed('level', function() {
    return this.get('level') + 1;
  }),
  indentStyle: Ember.computed('level', function() {
    // var padding = escapeCSS(this.get('level') * 20 + 'px');
    var padding = this.get('level') * 20 + 'px';
    return Ember.String.htmlSafe('padding-left: ' + padding);
  }),
  actions: {
    showOrHideChildren(status) {
      this.set('openChildren', this.get('hasChildren') && status);
    },
    showOprsAction() {
      this.set('showOprs', true);
    },
    hideOprsAction() {
      this.set('showOprs', false);
    }
  }
});
