function createPost() {
  var postComment;
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pagetemplateFn = _.template(pageTemplate);


  var postTemplate = document.getElementById('post-template').innerHTML;
  var templateFn = _.template(postTemplate);

  var stuffDiv = document.getElementById('stuffhere');
  var templateHTML = templateFn();
  var pagetemplateHTML = pagetemplateFn();
  stuffDiv.innerHTML += templateHTML;
  stuffDiv.innerHTML += pagetemplateHTML;
}

function postComment() {
  var postTemplate = document.getElementById('comment-template').innerHTML;
  var templateFn = _.template(postTemplate);
}