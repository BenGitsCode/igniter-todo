import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submit() {
      const text = this.get('text');
      this.get('onAdd')(text);
    }
  }

});

//this.get() is Ember's way of getting a property

// onAdd is one such a property: a closure action

//Todo-widget component will call the add-todo component in components/todo-widget.hbs
