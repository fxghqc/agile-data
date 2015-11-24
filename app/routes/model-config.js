import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('model-config');
  },
  model() {
    return [
      {
        name: 'item', displayName: '实体', domain: 'data', type: 'persistent', category: 'item',
        children: [{
          name: 'resource', displayName: '资源', domain: 'data', type: 'persistent', category: 'item'
        }, {
          name: 'idItem', displayName: '代号类', domain: 'data', type: 'persistent', category: 'item',
          children: [{
            name: 'formItem', displayName: '表单类', domain: 'data', type: 'persistent', category: 'item'
          }]
        }, {
          name: 'system', displayName: '系统类', domain: 'data', type: 'persistent', category: 'item'
        }]
      },
      {name: 'relation', displayName: '关联', domain: 'data', type: 'dynamic', category: 'relation'},
      {name: 'view', displayName: '视图', domain: 'data', type: 'dynamic', category: 'view'},
      {name: 'module', displayName: '模块', domain: 'app', type: 'dynamic', category: 'module'},
      {name: 'operation', displayName: '操作', domain: 'app', type: 'dynamic', category: 'operation'},
      {name: 'event', displayName: '事件', domain: 'app', type: 'dynamic', category: 'event'}
    ];
  }
});
