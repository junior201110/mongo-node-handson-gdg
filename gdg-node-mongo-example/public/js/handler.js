"use strict";

$(document).ready(function () {
	var form = $('#addUser');
	form.on('submit',function (e){
		e.preventDefault();
		var name = $('#name').val();
		var lastName = $('#lastname').val();
		var email = $('#email').val();
		var message = $('#message').val();
		var data = {user:{name:name,lastname:lastName,email:email,message:message}};
		$.post('/add',data,function (res) {
				$('#handler').html(JSON.stringify(res));
		})
	})
});