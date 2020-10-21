// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".btn-primary").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 1
        };

        //Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger added!");
                //Reload the page to get the updated list
                location.reload();
            }
        );
    });

    
});