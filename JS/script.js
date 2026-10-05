/*
 * ================================
 * BOOKING FORM
 * ================================
 */

$(document).on("submit", "#bookingForm", function (e) {

    e.preventDefault();

    var name = $("#customerName").val();
    var phone = $("#phone").val();
    var email = $("#bookingEmail").val();
    var date = $("#travelDate").val();
    var participants = $("#participants").val();
    var packageName = $("#tourPackage").val();


    if (name.trim() === "") {

        alert("Please enter your name.");

        return;

    }


    if (phone.trim() === "") {

        alert("Please enter your phone number.");

        return;

    }


    if (email.trim() === "") {

        alert("Please enter your email.");

        return;

    }


    if (date === "") {

        alert("Please select your travel date.");

        return;

    }


    if (participants === "") {

        alert("Please enter the number of participants.");

        return;

    }


    if (packageName === "") {

        alert("Please select a tour package.");

        return;

    }


    alert(
        "Thank you, " + name +
        "! Your booking for the " +
        packageName +
        " package has been received."
    );


    // Clear form
    $("#bookingForm")[0].reset();

});



/*
 * ================================
 * CONTACT FORM VALIDATION
 * ================================
 */

$(document).on("submit", "#contactForm", function (e) {

    e.preventDefault();


    // Get form information
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var consent = $("#consent").is(":checked");


    // Validate name
    if (name.trim() === "") {

        alert("Please enter your name.");

        return;

    }


    // Validate email
    if (email.trim() === "") {

        alert("Please enter your email.");

        return;

    }


    // Validate message
    if (message.trim() === "") {

        alert("Please enter your message.");

        return;

    }


    // Validate ethical consent
    if (!consent) {

        alert(
            "Please provide consent before submitting the form."
        );

        return;

    }


    // Successful submission
    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );


    // Clear form
    $("#contactForm")[0].reset();


    // Close popup
    $("#contactPopup").popup("close");

});