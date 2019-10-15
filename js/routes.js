// Path.rescue(function () {
//     alert("No such screen");
// });

Path.map("#/welcome").to(function() {
    $("#stage").load("screens/welcome.html");
});


// Path.map("*").enter(function() {
//     alert(" entering ....");
// })

Path.map("#/dashboard").to(function() {
    $("#stage").load("screens/dashboard.html");
});

Path.map("#/requests").to(function() {
    $("#stage").load("screens/requests.html");
});

Path.map("#/request_form").to(function() {
    $("#stage").load("screens/request_form.html");
});

Path.map("#/donations").to(function() {
    $("#stage").load("screens/donations.html");
});

Path.map("#/donation_details").to(function() {
    $("#stage").load("screens/donation_details.html");
});

Path.map("#/login").to(function() {
    App.FullScreen.show("screens/login.html");
    $(".fullscreen-close").hide();
    //$("#stage").load("screens/login.html");
});

Path.map("#/logout").to(function() {
    App.Events.emit("user-logged-out");
    App.FullScreen.show("screens/login.html");
    $(".fullscreen-close").hide();
});

Path.map("#/profile").to(function() {
    $("#stage").load("screens/profile.html");
});

Path.map("#/transactions").to(function() {
    $("#stage").load("screens/transactions.html");
});

Path.map("#/organization_form").to(function() {
    $("#stage").load("screens/organization_form.html");
});

Path.map("#/approve_donations").to(function() {
    $("#stage").load("screens/approve_donations.html");
});

Path.map("#/approve_requests").to(function() {
    $("#stage").load("screens/approve_requests.html");
});

Path.map("#/review_users").to(function() {
    $("#stage").load("screens/review_users.html");
});

Path.map("#/category").to(function() {
    $("#stage").load("screens/category.html");
});

Path.map("#/organizations").to(function() {
    $("#stage").load("screens/organizations.html");
});

Path.map("#/category_options").to(function() {
    $("#stage").load("screens/category_options.html");
});

Path.map("#/category_option_form").to(function() {
    $("#stage").load("screens/category_option_form.html");
});

Path.root("#/welcome");
Path.listen();