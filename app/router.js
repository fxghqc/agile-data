import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', { path: '/dashboard' });
  this.route('model-config', { path: '/model-config' });
});

export default Router;
