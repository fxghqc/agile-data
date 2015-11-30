import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  click() {
    this.set('isOpen', !this.get('isOpen'));
    this.sendAction('changeStatus', this.get('isOpen'));
  }
});
