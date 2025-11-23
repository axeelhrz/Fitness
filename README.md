# Landing Page - Catálogo de Productos Premium

Una landing page minimalista y profesional para captura de leads con integración a Google Sheets.

## 📋 Características

✅ **Diseño Minimalista**: Interfaz limpia con paleta gris/blanco y tipografía moderna
✅ **Responsive**: Totalmente adaptable a dispositivos móviles y desktop
✅ **Formulario Funcional**: Captura de nombre y teléfono
✅ **Integración Google Sheets**: Los datos se envían automáticamente a una hoja de cálculo
✅ **Validación de Datos**: Validación en tiempo real del formulario
✅ **Secciones Completas**: Hero, Beneficios, Catálogo y CTA

## 📁 Estructura de Archivos

```
landing/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos CSS (responsive)
├── script.js       # Lógica JavaScript y integración Google Sheets
└── README.md       # Este archivo
```

## 🚀 Configuración Inicial

### Paso 1: Crear un Formulario de Google

1. Ve a [Google Forms](https://forms.google.com)
2. Crea un nuevo formulario
3. Añade dos campos de texto:
   - **Nombre completo** (respuesta corta)
   - **Teléfono / WhatsApp** (respuesta corta)
4. Haz clic en "Enviar" y copia el enlace del formulario

### Paso 2: Obtener los IDs de los Campos

1. En Google Forms, haz clic en el icono de vista previa (ojo)
2. Abre la consola del navegador (F12 → Consola)
3. Ejecuta este código:

```javascript
document.querySelectorAll('input[type="text"]').forEach((input, index) => {
    console.log(`Campo ${index + 1}:`, input.name);
});
```

4. Anota los valores `entry_XXXXXXXXX` para cada campo

### Paso 3: Configurar script.js

Abre `script.js` y reemplaza:

```javascript
const GOOGLE_SHEETS_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

const FORM_FIELDS = {
    nombre: 'entry_XXXXXXXXX',      // Tu ID del campo Nombre
    telefono: 'entry_YYYYYYYYY'     // Tu ID del campo Teléfono
};
```

**Ejemplo:**
```javascript
const GOOGLE_SHEETS_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd1234567890/formResponse';

const FORM_FIELDS = {
    nombre: 'entry_123456789',
    telefono: 'entry_987654321'
};
```

## 🎨 Personalización

### Cambiar Textos

Edita `index.html` para cambiar:
- Títulos y subtítulos
- Nombres de productos
- Textos de beneficios
- Mensajes del formulario

### Cambiar Imágenes

En `index.html`, reemplaza las URLs de Unsplash:
```html
<img src="https://images.unsplash.com/photo-XXXXXXXXX?w=600&h=600&fit=crop" alt="...">
```

Puedes usar:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

### Cambiar Colores

En `styles.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #1a1a1a;      /* Color principal (negro) */
    --secondary-color: #f5f5f5;    /* Color secundario (gris claro) */
    --accent-color: #2d2d2d;       /* Color de acento */
    --text-color: #333;            /* Color del texto */
    --light-gray: #e8e8e8;         /* Gris claro */
    --white: #ffffff;              /* Blanco */
}
```

## 📱 Responsive Design

La landing page se adapta automáticamente a:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Menos de 768px

## 🔧 Hosting Recomendado

### Opciones Económicas:

1. **Netlify** (Recomendado - Gratis)
   - Sube los archivos directamente
   - Dominio gratuito o personalizado
   - [netlify.com](https://netlify.com)

2. **Vercel** (Gratis)
   - Ideal para proyectos estáticos
   - [vercel.com](https://vercel.com)

3. **GitHub Pages** (Gratis)
   - Sube a un repositorio de GitHub
   - [pages.github.com](https://pages.github.com)

4. **Hostinger** (Económico)
   - Hosting compartido desde €2.99/mes
   - [hostinger.es](https://hostinger.es)

## ✅ Checklist de Validación

Antes de publicar, verifica:

- [ ] Formulario de Google creado y configurado
- [ ] IDs de campos actualizados en `script.js`
- [ ] Textos personalizados en `index.html`
- [ ] Imágenes cargadas correctamente
- [ ] Diseño responsive en móvil (F12 → Responsive)
- [ ] Formulario envía datos a Google Sheets
- [ ] Botones funcionan correctamente
- [ ] Enlaces y navegación funcionan

## 🐛 Solución de Problemas

### El formulario no envía datos

1. Verifica que la URL de Google Forms sea correcta
2. Comprueba que los IDs de los campos sean exactos
3. Abre la consola (F12) y busca errores
4. Asegúrate de que el formulario de Google esté publicado

### Las imágenes no cargan

1. Verifica que las URLs sean válidas
2. Comprueba la conexión a internet
3. Intenta con otras imágenes de stock

### El diseño se ve mal en móvil

1. Abre F12 → Responsive Design Mode
2. Verifica que los media queries se apliquen
3. Prueba en diferentes tamaños de pantalla

## 📞 Soporte

Si tienes dudas sobre la configuración, consulta:
- [Documentación de Google Forms](https://support.google.com/docs/answer/7032287)
- [Guía de Netlify](https://docs.netlify.com)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Última actualización**: 2024
**Versión**: 1.0
(ending readme)
```