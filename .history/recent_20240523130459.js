document.getElementById("btn-recent").addEventListener("click", function () {

  const newPost = document.getElementById("new-recent").value;


  const recentsContainer = document.createElement("div");
  recentsContainer.classList.add("post"); 
  const recentsElement = document.createElement("p");
  recentsElement.innerText = newPost;


  recentsContainer.appendChild(recentsElement);


  const recentPostsContainer = document.getElementById("recents-container");
  recentPostsContainer.appendChild(recentsContainer);

 
  document.getElementById("new-comment").value = "";
});