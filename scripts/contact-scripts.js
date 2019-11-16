$().ready(function() {
    $.validator.setDefaults({
        submitHandler: function(form) {
            $("#modalFirstName").text(form.elements["firstname"].value);
            $("#form-submit-modal").modal({
                fadeDuration: 50,
                escapeClose: true,
                clickClose: true,
                showClose: true
            });
            $("#contactForm input[type='text'],#contactForm input[type='email'], #contactForm textarea").val("");
        }
    });

    $().ready(function() {
        $("#contactForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                email: {
                    required: true,
                    email: true
                },
                comment: "required"
            },
            messages: {
                firstname: "Please enter your First Name",
                lastname: "Please enter your Last Name",
                email: {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                comment: "Please enter a message"
            }
        });
    });
});
