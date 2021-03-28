$(function () {
  $(".devour-button").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newEatenBurger = {
      devoured: newDevoured,
    };

    console.log(id);
    console.log(newDevoured);
    console.log(newEatenBurger);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenBurger,
    }).then(function () {
      console.log("That was a good burger!", newDevoured);
      location.reload();
    });
  });
});

$(function () {
  $(".make-burger").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim(),
      // eaten: $("[name=eaten]:checked").val().trim(),
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Created a new burger!");
      location.reload();
    });
  });
});

$(".delete-button").on("click", function (event) {
  let id = $(this).data("id");

  console.log(id);

  $.ajax("/api/burgers" + id, {
    type: "DELETE",
  }).then(function () {
    console.log("This burger is no more", id);
    location.reload();
  });
});
