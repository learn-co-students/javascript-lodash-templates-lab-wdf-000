function createPost(){
    var author = document.getElementById("postAuthor").value;
    var post = document.getElementById("postBody").value;
      var title = document.getElementById("postTitle").value;

    var postTemplate = document.getElementById("post-template").innerHTML;
    var pageTemplate = document.getElementById("page-template").innerHTML;
     //create template function
     var postTemplateFn = _.template(postTemplate);
     var pageTemplateFn = _.template(pageTemplate);

     var postsDiv = document.getElementById("post");

     //execute template function with JSON object for the interpolated values
     var postTemplateHTML = postTemplateFn({ 'postTitle': title, 'postBody': post, 'postAuthor': author });
     var pageTemplateHTML = pageTemplateFn({ 'wholePost': postTemplateHTML});
     //append rather than replace!
     postsDiv.innerHTML += postTemplateHTML;
}

function postComment(){
  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("comment").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

   //create template function
   var templateFn = _.template(commentTemplate);

   var commentsDiv = document.getElementById("comments");

   //execute template function with JSON object for the interpolated values
   var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

   //append rather than replace!
   commentsDiv.innerHTML += templateHTML;
}
