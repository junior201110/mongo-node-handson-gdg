"use strict";

$(document).ready(function () {
	var form = $('#addUser');
	form.on('submit',function (e){
		e.preventDefault();
		var name = $('#name').val();
		var lastName = $('#lastname').val();
		console.log(name,lastName)
	})
});