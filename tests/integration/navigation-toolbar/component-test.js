import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navigation-toolbar', 'Integration | Component | navigation toolbar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{navigation-toolbar}}`);

  assert.ok(true);
});

