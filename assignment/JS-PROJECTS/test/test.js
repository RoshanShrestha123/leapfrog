var hello = document.getElementById('hello');

function Student(name, dob, el) {
  var that = this;

  this.name = name;
  this.dob = dob;
  this.el = el;

  this.getProfile = function() {
    console.log('In Get Profile', that);
    return that.name + ' is an idiot';
  }

  this.getNameFiveTimes = function() {
    var array = [];
    console.log('In Get Name', that);
    for (var i = 0; i < 5; i++) {
      console.log(i, that);
      array.push(that.name);
    }

    return array;
  }

  this.el.onclick = function() {
    console.log('In onclick', that);
  }


}

var john = new Student('John', '1990-01-02', hello);
console.log(john);

john.getProfile();
john.getNameFiveTimes()
