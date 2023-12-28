$(document).ready(function() {
$('#feedbackForm').submit(function(event) {
    event.preventDefault();  
    var name = $('#name').val();
    var message = $('#message').val();  
    var feedbackData = {
    name: name,
    message: message,
    timestamp: new Date().toLocaleString()
  };  
    var existingData = JSON.parse(localStorage.getItem('feedback')) || [];  
    existingData.push(feedbackData);  
    localStorage.setItem('feedback', JSON.stringify(existingData));  
    $('#name').val('');
    $('#message').val('');  
 });
});
  