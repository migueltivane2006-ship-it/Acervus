// script.js - Arquivo JavaScript externo para interações

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ALTERNAR IMAGENS DO CABEÇALHO - Presencial/Online
    const presencialBtn = document.getElementById('presencial-btn');
    const onlineBtn = document.getElementById('online-btn');
    const heroImage = document.getElementById('hero-image');
    
    // URLs das imagens (substitua por URLs reais ou caminhos locais)
    const images = {
        presencial: 'presencial.jpg',
        online: 'online.jpg'
    };
    
    // Função para alternar entre modalidades
    function toggleModality(modality) {
        // Remove a classe active de ambos os botões
        presencialBtn.classList.remove('active');
        onlineBtn.classList.remove('active');
        
        // Adiciona a classe active ao botão clicado
        if (modality === 'presencial') {
            presencialBtn.classList.add('active');
            heroImage.src = images.presencial;
            heroImage.alt = 'Aulas Presenciais';
        } else {
            onlineBtn.classList.add('active');
            heroImage.src = images.online;
            heroImage.alt = 'Aulas Online';
        }
        
        // Adiciona uma animação sutil na transição
        heroImage.style.opacity = '0.7';
        setTimeout(() => {
            heroImage.style.opacity = '1';
        }, 300);
    }
    
    // Event listeners para os botões
    presencialBtn.addEventListener('click', function() {
        toggleModality('presencial');
    });
    
    onlineBtn.addEventListener('click', function() {
        toggleModality('online');
    });
    
    // 2. ALTERNAR CORES DOS CURSOS
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Função para alternar o curso ativo
    function setActiveCourse(clickedCard) {
        // Remove a classe active de todos os cards
        serviceCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Adiciona a classe active ao card clicado
        clickedCard.classList.add('active');
        
        // Opcional: Exibir informações adicionais no console
        const courseType = clickedCard.getAttribute('data-course');
        console.log(`Curso selecionado: ${courseType}`);
        
        // Aqui você pode adicionar mais funcionalidades
        // como carregar conteúdo específico do curso, etc.
    }
    
    // Adiciona event listeners a todos os cards de serviço
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            setActiveCourse(this);
        });
    });
    
    // 3. ALTERAR CONTEÚDO DO RODAPÉ
    const footerText = document.getElementById('footer-text');
    
    // Função para atualizar o rodapé
    function updateFooter() {
        footerText.textContent = 'Desenvolvido por Miguel Tivane (Nome Completo) &copy; 2025';
        
        // Adiciona uma animação sutil
        footerText.style.transition = 'all 0.5s ease';
        footerText.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            footerText.style.transform = 'scale(1)';
        }, 500);
    }
    
    // Chama a função para atualizar o rodapé
    updateFooter();
    
    // 4. FUNÇÃO PARA COPIAR NÚMEROS (mantida do código original)
    window.copyText = function(text, label) {
        navigator.clipboard.writeText(text)
        .then(() => {
            const msg = document.getElementById('copiado-msg');
            msg.textContent = `${label} copiado para a área de transferência ✅`;
            setTimeout(() => msg.textContent = '', 2000);
        })
        .catch(err => console.error('Erro ao copiar:', err));
    };
    
    // 5. ANIMAÇÕES ADICIONAIS PARA MELHORAR A EXPERIÊNCIA DO USUÁRIO
    
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de hover nos cards de planos
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Feedback visual ao enviar formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Feedback visual
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simula o envio (em um caso real, isso seria substituído pela lógica real de envio)
            setTimeout(() => {
                submitBtn.textContent = 'Enviado!';
                submitBtn.style.backgroundColor = '#10B981'; // Verde
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = ''; // Volta à cor original
                }, 2000);
            }, 1500);
        });
    });
    
    // Inicialização
    console.log('Centro de Explicações Acervus - JavaScript carregado com sucesso!');
});