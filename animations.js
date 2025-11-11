// animations.js - Arquivo jQuery simples para animações

$(document).ready(function() {
    
    // Animação para mostrar/ocultar lista de prestações
    $('.show-prestacoes').click(function() {
        // Obter o tipo de plano do botão clicado
        var plano = $(this).data('plano');
        var listaPrestacoes = $('#prestacoes-' + plano);
        
        // Verificar se a lista está visível
        if (listaPrestacoes.is(':visible')) {
            // Se está visível, ocultar com efeito slide
            listaPrestacoes.slideUp(400);
        } else {
            // Se está oculta, mostrar com efeito slide
            listaPrestacoes.slideDown(400);
        }
    });
    
});