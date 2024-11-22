ScrollReveal({ reset: true });

/*Sessao de textos*/
    ScrollReveal().reveal('#Texto', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'left',
        }
    );
/*Sessao de textos*/    
/*Sessao cards */
    ScrollReveal().reveal('.Card01', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'top',
        }
    );
    ScrollReveal().reveal('#cards02', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'bottom',
        }
    );
    ScrollReveal().reveal('#cards04', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'bottom',
        }
    );
    ScrollReveal().reveal('.card02', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'left',
        }
    );
    ScrollReveal().reveal('#cards05', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'right',
        }
    );
    ScrollReveal().reveal('#card04', 
        {    
            duration: 1000, reset: true, distance: '100px' , origin: 'right',
        }
    );
/*Sessao cards */

document.addEventListener("DOMContentLoaded", function () {
    function loading() {
        // Seleciona os elementos pelo DOM
        const boxLoad = document.querySelector(".boxload");
        const content = document.querySelector(".contentt");

        // Verifica se os elementos existem antes de tentar modificá-los
        if (boxLoad && content) {
            boxLoad.style.display = "none"; // Oculta o elemento de carregamento
            content.style.display = "block"; // Exibe o conteúdo principal
        } else {
            console.error("Elementos '.boxload' ou '.contentt' não encontrados!");
        }
    }

    // Chama a função de loading
    loading();
});