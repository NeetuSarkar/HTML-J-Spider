document.addEventListener("DOMContentLoaded", () => {
  let likeButton = document.querySelector("#like-btn");
  let dislikeButton = document.querySelector("#dislike-btn");
  let likes = document.querySelector("#likes");
  let dislikes = document.querySelector("#dislikes");
  let totalReaction = document.querySelector("#total-reactions");

  let likesCount = localStorage.getItem("likes") || 0;
  let dislikesCount = localStorage.getItem("dislikes") || 0;

  let reactions =
    localStorage.getItem("reactions") || likesCount + dislikesCount;
  renderData();

  likeButton.addEventListener("click", () => {
    likesCount++;
    reactions++;
    localStorage.setItem("likes", likesCount);
    localStorage.setItem("reactions", reactions);
    renderData();
  });

  dislikeButton.addEventListener("click", () => {
    dislikesCount++;
    reactions++;
    localStorage.setItem("dislikes", dislikesCount);
    localStorage.setItem("reactions", reactions);
    renderData();
  });

  function renderData() {
    dislikes.textContent = dislikesCount;
    totalReaction.textContent = reactions;
    likes.textContent = likesCount;
  }
});
