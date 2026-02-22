$(function () {
    var WHATSAPP_NUMBER = '573182105940';
    var WHATSAPP_BASE = 'https://wa.me/' + WHATSAPP_NUMBER;

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            var msg = '*Contacto - La Esquinita de Esneda*\n\n';
            msg += 'Nombre: ' + name + '\n';
            msg += 'Teléfono: ' + phone + '\n';
            msg += 'Asunto: ' + subject + '\n\n';
            msg += 'Mensaje: ' + message;
            var url = WHATSAPP_BASE + '?text=' + encodeURIComponent(msg);
            window.open(url, '_blank', 'noopener,noreferrer');

            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $('#success > .alert-success').append("<strong>Se abrirá WhatsApp para enviar tu mensaje.</strong>");
            $('#success > .alert-success').append('</div>');
            $('#contactForm').trigger("reset");
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
