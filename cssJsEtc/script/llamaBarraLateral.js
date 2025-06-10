// assets/js/components.js (o llamaBarraLateral.js)

// 1. Configuración de rutas BASE
const COMPONENTS_PATH = '../componentesReutilizables/barraNavegLateral'; 

// 2. Función principal mejorada
async function loadComponents() {
    try {
        // Carga la barra lateral
        await loadComponent('sidebar-container', `${COMPONENTS_PATH}barraNavegLatelar.html`);
        
        // Carga condicional de header y footer (observa las rutas corregidas)
        await loadComponent('header-container', `${COMPONENTS_PATH}header.html`);
        await loadComponent('footer-container', `${COMPONENTS_PATH}footer.html`);
        
        initSidebar(); // Inicializa funcionalidades
        
    } catch (error) {
        console.error('Error:', error);
        showError();
    }
}

// 3. Función auxiliar para cargar cualquier componente
async function loadComponent(containerId, path) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const response = await fetch(path);
    if (!response.ok) throw new Error(`Error al cargar ${path}`);
    container.innerHTML = await response.text();
}

// 4. Manejo de errores visual
function showError() {
    const container = document.getElementById('sidebar-container');
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <p>⚠️ Error cargando componentes</p>
                <a href="../index.html">Volver al inicio</a>
            </div>
        `;
    }
}

// 5. Funcionalidad de la barra lateral (igual que antes)
function initSidebar() {
    // Móvil: dropdowns
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

// Iniciar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadComponents);
document.addEventListener('DOMContentLoaded', loadComponents);