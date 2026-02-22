/**
 * Formularios funcionales - La Esquinita de Esneda
 * Envío de pedidos y contacto por WhatsApp (sin backend).
 */
(function () {
    'use strict';
    var WHATSAPP_NUMBER = '573182105940';
    var WHATSAPP_BASE = 'https://wa.me/' + WHATSAPP_NUMBER;

    function openWhatsApp(text) {
        var url = WHATSAPP_BASE + (text ? '?text=' + encodeURIComponent(text) : '');
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function initOrderForms() {
        var form = document.getElementById('formPedido');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var nombre = (form.querySelector('[name="nombre"]') || {}).value || '';
            var telefono = (form.querySelector('[name="telefono"]') || {}).value || '';
            var direccion = (form.querySelector('[name="direccion"]') || {}).value || '';
            var pedido = (form.querySelector('[name="pedido"]') || {}).value || '';
            var selectPago = form.querySelector('[name="metodo_pago"]');
            var metodoPago = selectPago && selectPago.options[selectPago.selectedIndex] ? selectPago.options[selectPago.selectedIndex].text : '';
            var msg = '*Pedido - La Esquinita de Esneda*\n\n';
            msg += 'Nombre: ' + nombre + '\n';
            msg += 'Teléfono: ' + telefono + '\n';
            msg += 'Dirección: ' + direccion + '\n';
            msg += 'Pedido: ' + pedido + '\n';
            if (metodoPago && metodoPago !== 'Método de Pago') msg += 'Método de pago: ' + metodoPago + '\n';
            openWhatsApp(msg);
        });
    }

    function initOfferForm() {
        var form = document.getElementById('formPedirAhora');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var telefono = (form.querySelector('[name="telefono"]') || {}).value || '';
            var msg = 'Hola, quiero hacer un pedido.';
            if (telefono) msg += ' Mi teléfono: ' + telefono;
            openWhatsApp(msg);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initOrderForms();
            initOfferForm();
        });
    } else {
        initOrderForms();
        initOfferForm();
    }
})();
