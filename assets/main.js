$(function() {
$.ajax({
    url: 'https://www.codeschool.com/users/ednas.json',
    dataType: 'jsonp',
    success: function(response) {
    	//User information
		$('#user').append(
			'<h2>'+ response.user.username.charAt(0).toUpperCase() + response.user.username.slice(1) + '</h2>'
			+ '<img src=' + response.user.avatar + '>'
			+ '<h4>Has earned: <span>' + response.user.total_score + '</span> points</h4>');
		//Information about badges earned
   for (var i = 0; i < response.courses.completed.length; i++) {
   	$('#badges').append('<div class="course"> <h3>' + response.courses.completed[i].title + '</h3>'
   		+ '<img src=' + response.courses.completed[i].badge + '>'
   		+ '<a class="btn btn-primary" href=' + response.courses.completed[i].url + ' target="_blank">See Course</a>'
   		
   		+'</div>');
	   };
   		//What I'm tinkering with
   	for (var i = 0; i < response.courses.in_progress.length; i++) {
   	$('#inProgress').append('<div class="course"> <h3>' + response.courses.in_progress[i].title + '</h3>'
   		+ '<img src=' + response.courses.in_progress[i].badge + '>'
   		+ '<a class="btn btn-primary" href=' + response.courses.in_progress[i].url + ' target="_blank">See Course</a>'
   		+'</div>');   		
	   	};
   		//Badges earned
   	for (var i = 0; i < response.badges.length; i++) {
   	$('#badge').append(
      '<div class="earnedBadges"><div class="hovertext">'
      + response.badges[i].name
      + '</div><h3><img src=' + response.badges[i].badge
      + '></h3></div>');		
	   	};
    $('#numBadges').append(response.badges.length);
    $('#numProgress').append(response.courses.in_progress.length);
    $('#numCompleted').append(response.courses.completed.length);   

      }
  });
});