
/**
 * @class
 */
function home() {
  Monkberry.call(this);
  var _this = this;

  // Create elements
  var for0 = document.createComment('if');
  var child0 = {};
  var for1 = document.createComment('if');
  var child2 = {};

  // Update functions
  this.__update__ = {
    view: function (view) {
      Monkberry.cond(_this, for0, child0, home_if0, (view) === ('home'));
      Monkberry.cond(_this, for1, child2, home_if2, (view) == ('auth'));
    }
  };

  // On update actions
  this.onUpdate = function (__data__) {
    if (child0.ref) {
      child0.ref.update(__data__);
    }
    if (child2.ref) {
      child2.ref.update(__data__);
    }
  };

  // Set root nodes
  this.nodes = [for0, for1];
}
home.prototype = Object.create(Monkberry.prototype);
home.prototype.constructor = home;
home.pool = [];
home.prototype.update = function (__data__) {
  if (__data__.view !== undefined) {
    this.__update__.view(__data__.view);
  }
  this.onUpdate(__data__);
};

/**
 * @class
 */
function home_if0() {
  Monkberry.call(this);

  // Create elements
  var div0 = document.createElement('div');
  var text1 = document.createTextNode('');
  var form2 = document.createElement('form');
  var input3 = document.createElement('input');
  var input4 = document.createElement('input');
  var input5 = document.createElement('input');

  // Construct dom
  input3.setAttribute("type", "text")
  input3.setAttribute("name", "username")
  input4.setAttribute("type", "password")
  input4.setAttribute("name", "password")
  input5.setAttribute("type", "submit")
  input5.value = "Submit"
  form2.appendChild(input3);
  form2.appendChild(input4);
  form2.appendChild(input5);
  form2.id = "auth"
  div0.appendChild(document.createTextNode(" Hello "));
  div0.appendChild(text1);
  div0.appendChild(document.createTextNode("! "));
  div0.appendChild(form2);

  // Update functions
  this.__update__ = {
    name: function (name) {
      text1.textContent = name;
    }
  };

  // Set root nodes
  this.nodes = [div0];
}
home_if0.prototype = Object.create(Monkberry.prototype);
home_if0.prototype.constructor = home_if0;
home_if0.pool = [];
home_if0.prototype.update = function (__data__) {
  if (__data__.name !== undefined) {
    this.__update__.name(__data__.name);
  }
};

/**
 * @class
 */
function home_if2() {
  Monkberry.call(this);

  // Create elements
  var div0 = document.createElement('div');
  var text1 = document.createTextNode('');
  var p2 = document.createElement('p');
  var text3 = document.createTextNode('');

  // Construct dom
  p2.appendChild(text3);
  div0.appendChild(document.createTextNode(" Authentication "));
  div0.appendChild(text1);
  div0.appendChild(document.createTextNode("! "));
  div0.appendChild(p2);

  // Update functions
  this.__update__ = {
    name: function (name) {
      text1.textContent = name;
    },
    token: function (token) {
      text3.textContent = token;
    }
  };

  // Set root nodes
  this.nodes = [div0];
}
home_if2.prototype = Object.create(Monkberry.prototype);
home_if2.prototype.constructor = home_if2;
home_if2.pool = [];
home_if2.prototype.update = function (__data__) {
  if (__data__.name !== undefined) {
    this.__update__.name(__data__.name);
  }
  if (__data__.token !== undefined) {
    this.__update__.token(__data__.token);
  }
};

window.home = home;
//# sourceMappingURL=view.js.map
