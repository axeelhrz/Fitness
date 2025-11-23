// Configuración de Google Apps Script
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxcqc_2QU7TVhkvc2Iw8dtpODEdWHd3_6hRqMa3ATchFN6vjNCzp0RVgplA7dFP5ldkOw/exec';

// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    // Validación básica
    if (!nombre || !telefono) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Validación de teléfono (al menos 9 dígitos)
    if (!/^\d{9,}/.test(telefono.replace(/\D/g, ''))) {
        alert('Por favor, ingresa un teléfono válido.');
        return;
    }

    // Mostrar estado de envío
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="button-text">ENVIANDO...</span>';
    submitButton.disabled = true;

    try {
        // Crear URL con parámetros
        const url = new URL(GOOGLE_SHEETS_URL);
        url.searchParams.append('nombre', nombre);
        url.searchParams.append('telefono', telefono);

        // Enviar datos a Google Sheets
        await fetch(url.toString(), {
            method: 'POST',
            mode: 'no-cors'
        });

        // Mostrar mensaje de éxito
        alert('¡Gracias! Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas.');
        
        // Limpiar formulario
        document.getElementById('contactForm').reset();

    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.');
    } finally {
        // Restaurar botón
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
});

// Validación en tiempo real del teléfono
document.getElementById('telefono').addEventListener('input', function() {
    // Permitir solo números, espacios, guiones y símbolos de teléfono
    this.value = this.value.replace(/[^\d\s\-\+\(\)]/g, '');
});