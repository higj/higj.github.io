$(".loadmore_btn").click(loadMorePosts);
function loadMorePosts() {
  var _this = this;
  var $blogContainer = $("#posts-list");
  var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
  var totalPages = parseInt($blogContainer.attr("data-totalPages"));
  $(this).addClass("loading");

  $.get("/page" + nextPage, function (data) {
    var htmlData = $.parseHTML(data);
    var $articles = $(htmlData).find(".col-md-6");
    console.log(nextPage);
    $blogContainer.attr("data-page", nextPage).append($articles);
    if ($blogContainer.attr("data-totalPages") == nextPage) {
      $(".loadmore_btn").remove();
    }
    $(_this).removeClass("loading");
  });
}
