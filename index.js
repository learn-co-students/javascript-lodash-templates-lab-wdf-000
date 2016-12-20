function createPost() {
// get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;

  // create template function
  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
  var postsDiv = document.getElementById('post');

  //execute template function with JSON object using  the interpolated values
  var postTemplateHTML = postTemplateFn({ 'title': postTitle, 'body': post, 'poster': postAuthor });

  //append rather than replace!
  postsDiv.innerHTML += postTemplateHTML;

}

function postComment() {
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;
 
  var commentTemplate = document.getElementById("comment-template").innerHTML;
 
  //create template function
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
   //append rather than replace!
   commentsDiv.innerHTML += templateHTML;
}
