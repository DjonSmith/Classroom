//-----------------------------------------------
function People(name, surname, gender) {
	this.name = name;
	this.surname = surname;
	this.gender = gender;
	this._nationality = "";
};

People.prototype.changeNationality = function(nationality) {
	this._nationality == nationality;
	alert (this._nationality);
};

People.prototype.sayMyName = function() {
	if (this.gender == "male") {
		alert("Mr." + this.name);
	} else if (this.gender == "female") {
		alert("Ms." + this.name);
	}
};
//-----------------------------------------------
function Classroom() {
	this.students = [];
	this.parents = [];
};

Classroom.prototype.addStudent = function(student) {
	this.students.push(student);
};

Classroom.prototype.removeStudent = function(student) {
	for (var i = 0; i < students.length; i++) {
	 if (students[i] == student) {
		for (i; i < students.length; i++) {
			students[i] = students[i+1];
		}
		students.pop();
	}
	}
};
//-----------------------------------------------
function Student () {
	this.subjects = [];
	People.apply(this, arguments);
};

Student.prototype = Object.create(People.prototype);
Student.prototype.constructor = Student;

Student.prototype.addSubject = function(subject) {
	this.subjects.push(subject);
};

Student.prototype.removeSubject = function(subject) {
	for (var i = 0; i < subjects.length; i++) {
	 if (subjects[i] == subject) {
		for (i; i < subjects.length; i++) {
			subjects[i] = subject[i+1];
		}
		subjects.pop();
	}
	}
};
//-----------------------------------------------
function Parent(rigot) {
	this.rigot = rigot;
	People.apply(this, arguments);
}

Parent.prototype = Object.create(People.prototype);
Parent.prototype.constructor = Parent;
//-----------------------------------------------