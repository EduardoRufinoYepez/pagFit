// assets/js/components.js

// Función para cargar componentes
async function loadComponents() {
    try {
        // Cargar sidebar
        const sidebarResponse = await fetch('../reutilizables/barraNavegLateral.html');
        const sidebarHTML = await sidebarResponse.text();
        document.getElementById('sidebar-container').innerHTML = sidebarHTML;
        
        // Cargar header si existe el contenedor
        if (document.getElementById('header-container')) {
            const headerResponse = await fetch('../components/header.html');
            const headerHTML = await headerResponse.text();
            document.getElementById('header-container').innerHTML = headerHTML;
        }
        
        // Cargar footer si existe el contenedor
        if (document.getElementById('footer-container')) {
            const footerResponse = await fetch('../reutilizabl');
            const footerHTML = await footerResponse.text();
            document.getElementById('footer-container').innerHTML = footerHTML;
        }
        
        // Inicializar funcionalidades de la sidebar
        initSidebar();
        
    } catch (error) {
        console.error('Error cargando componentes:', error);
        document.getElementById('sidebar-container').innerHTML = 
            '<p class="error">Error cargando navegación. <a href="sitemap.html">Ver mapa del sitio</a></p>';
    }
}

// Inicializar funcionalidades de la sidebar (igual para todas las páginas)
function initSidebar() {
    // Mobile: Alternar dropdown con click
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', loadComponents);