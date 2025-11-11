// jquery-animations.js - Arquivo jQuery para animações

$(document).ready(function() {
    
    // 1. ANIMAÇÃO PARA MOSTRAR/OCULTAR LISTA DE PRESTAÇÕES
    $('.show-prestacoes').on('click', function() {
        const plano = $(this).data('plano');
        const prestacoesList = $('#prestacoes-' + plano);
        const planCard = $(this).closest('.plan-card');
        const button = $(this);
        
        // Fechar outras listas abertas
        $('.prestacoes-list').not(prestacoesList).slideUp(300);
        $('.plan-card').not(planCard).removeClass('expanded');
        $('.show-prestacoes').not(button).removeClass('expanded');
        
        // Alternar a visibilidade da lista atual
        if (prestacoesList.is(':visible')) {
            // Se está visível, ocultar com animação
            prestacoesList.slideUp(300, function() {
                planCard.removeClass('expanded');
                button.removeClass('expanded');
            });
        } else {
            // Se está oculta, mostrar com animação
            prestacoesList.slideDown(300, function() {
                planCard.addClass('expanded');
                button.addClass('expanded');
                
                // Scroll suave para a seção expandida
                $('html, body').animate({
                    scrollTop: planCard.offset().top - 100
                }, 500);
            });
        }
    });
    
    // 2. ANIMAÇÃO DE HOVER MELHORADA NOS CARDS DE SERVIÇO
    $('.service-card').hover(
        function() {
            // Mouse enter
            $(this).stop().animate({
                'margin-top': '-10px',
                'box-shadow': '0 15px 30px rgba(37, 99, 235, 0.2)'
            }, 200);
        },
        function() {
            // Mouse leave
            if (!$(this).hasClass('active')) {
                $(this).stop().animate({
                    'margin-top': '0px',
                    'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }, 200);
            }
        }
    );
    
    // 3. ANIMAÇÃO DE CLIQUE NOS CARDS DE SERVIÇO
    $('.service-card').on('click', function() {
        // Remover classe active de todos
        $('.service-card').removeClass('active').animate({
            'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            'transform': 'scale(1)'
        }, 300);
        
        // Adicionar classe active ao card clicado
        $(this).addClass('active').animate({
            'box-shadow': '0 20px 25px -5px rgba(37, 99, 235, 0.3)',
            'transform': 'scale(1.02)'
        }, 300);
        
        // Efeito de pulso no ícone
        const icon = $(this).find('.service-icon');
        icon.css('transform', 'scale(1.2)');
        setTimeout(() => {
            icon.css('transform', 'scale(1)');
        }, 300);
    });
    
    // 4. ANIMAÇÃO DE SCROLL SUAVE PARA LINKS INTERNOS
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutCubic');
        }
    });
    
    // 5. ANIMAÇÃO DE CARREGAMENTO PARA ELEMENTOS AO ROLAR A PÁGINA
    function animateOnScroll() {
        $('.service-card, .plan-card').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    }
    
    // Executar na carga inicial e no scroll
    animateOnScroll();
    $(window).on('scroll', animateOnScroll);
    
    // 6. ANIMAÇÃO PARA OS BOTÕES DE MODALIDADE (PRESENCIAL/ONLINE)
    $('.modality-btn').on('click', function() {
        // Remover active de todos os botões
        $('.modality-btn').removeClass('active').animate({
            backgroundColor: '#ffffff',
            color: '#6b7280'
        }, 200);
        
        // Adicionar active ao botão clicado
        $(this).addClass('active').animate({
            backgroundColor: '#2563eb',
            color: '#ffffff'
        }, 200);
        
        // Efeito de transição na imagem
        const heroImage = $('#hero-image');
        heroImage.animate({ opacity: 0.3 }, 200, function() {
            // Alterar a imagem baseada no botão clicado
            if ($(this).hasClass('active')) {
                heroImage.attr('src', $(this).attr('id') === 'presencial-btn' ? 'presencial.jpg' : 'online.jpg');
                heroImage.attr('alt', $(this).attr('id') === 'presencial-btn' ? 'Aulas Presenciais' : 'Aulas Online');
            }
            heroImage.animate({ opacity: 1 }, 300);
        });
    });
    
    // 7. ANIMAÇÃO DE ENVIO DE FORMULÁRIOS
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');
        const originalText = submitBtn.text();
        
        // Animação de loading
        submitBtn.prop('disabled', true).html(
            '<span class="loading-spinner">⏳</span> Enviando...'
        ).animate({
            backgroundColor: '#10B981'
        }, 300);
        
        // Simular envio (substituir por AJAX real se necessário)
        setTimeout(() => {
            submitBtn.html('✅ Enviado!');
            
            // Reset após 2 segundos
            setTimeout(() => {
                submitBtn.prop('disabled', false).text(originalText).animate({
                    backgroundColor: '#2563eb'
                }, 300);
                
                // Limpar formulário
                form[0].reset();
            }, 2000);
        }, 1500);
    });
    
    // 8. ANIMAÇÃO DE DIGITAÇÃO PARA O TÍTULO PRINCIPAL
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.text('');
        
        function type() {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Aplicar efeito de digitação ao carregar a página
    const heroTitle = $('.hero-title');
    const originalText = heroTitle.text();
    typeWriter(heroTitle, originalText, 50);
    
    // 9. ANIMAÇÃO PARA OS NÚMEROS DE PAGAMENTO
    $('.payment-number').hover(
        function() {
            $(this).animate({
                'letter-spacing': '0.2em',
                'color': '#2563eb'
            }, 200);
        },
        function() {
            $(this).animate({
                'letter-spacing': '0.05em',
                'color': '#1f2937'
            }, 200);
        }
    );
    
    // 10. ANIMAÇÃO DE PULSO PARA BOTÕES DE COPIAR
    $('.copy-button').on('click', function() {
        const button = $(this);
        button.animate({
            'transform': 'scale(0.95)'
        }, 100, function() {
            button.animate({
                'transform': 'scale(1)'
            }, 100);
        });
    });
    
    console.log('jQuery animations carregadas com sucesso!');
});

// Adicionar easing personalizado para animações mais suaves
$.easing.easeInOutCubic = function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};