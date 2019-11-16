$().ready(function() {
    $.validator.setDefaults({
        submitHandler: function(form) {
            $("#newsletterName").text(form.elements["name"].value);
            $("#newsletter-modal").modal({
                fadeDuration: 50,
                escapeClose: true,
                clickClose: true,
                showClose: true
            });
            $("#newsletterForm input[type='text'],#newsletterForm input[type='email']").val("");
        }
    });

    $().ready(function() {
        $("#newsletterForm").validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                }
            }
        });
    });
});
