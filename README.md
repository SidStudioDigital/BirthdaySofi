# Fiesta de Cumpleaños - Landing Page

Una landing page interactiva y completamente personalizable para fiestas de cumpleaños infantiles, desarrollada con HTML5, Tailwind CSS y JavaScript vanilla.

## 🎉 Características

- **Completamente JSON-driven**: Todos los textos e imágenes se pueden modificar fácilmente desde archivos JSON
- **Responsive Design**: Diseño adaptable para todos los dispositivos
- **Animaciones Interactivas**: Confeti, globos flotantes y animaciones suaves
- **Galería de Fotos**: Slider automático con navegación manual
- **Formulario RSVP**: Sistema paso a paso para confirmar asistencia
- **Contador Regresivo**: Tiempo real hasta la fecha de la fiesta
- **Timeline de Actividades**: Programación visual del día del evento

## 📁 Estructura de Archivos JSON

### `data/party-content.json`
Contiene toda la información textual de la fiesta:
- Información básica (nombre, edad, fecha, lugar)
- Textos de todas las secciones
- Botones y etiquetas
- Información de contacto
- Detalles de la ubicación

### `data/gallery-images.json` 
Gestiona todas las imágenes:
- Globos flotantes
- Galería de fotos principal
- Ideas de regalos con descripciones
- Testimonios con avatares

### `data/activities-schedule.json`
Define la programación del evento:
- Horarios de actividades
- Descripción de cada actividad
- Colores y posicionamiento visual

## 🛠️ Personalización Fácil

### Cambiar Información Básica
Edita `data/party-content.json`:
```json
{
  "partyInfo": {
    "childName": "Sofia",
    "age": 7,
    "title": "¡Sofia cumple 7 años! 🎂",
    "date": "Sábado, 28 Septiembre 2025",
    "time": "15:00 - 18:00"
  }
}
```

### Actualizar Imágenes
Modifica `data/gallery-images.json`:
```json
{
  "gallery": [
    {
      "src": "URL_DE_TU_IMAGEN",
      "alt": "Descripción",
      "caption": "Texto de la imagen",
      "fallback": "URL_IMAGEN_RESPALDO"
    }
  ]
}
```

### Modificar Actividades
Ajusta `data/activities-schedule.json`:
```json
{
  "activities": [
    {
      "time": "15:00",
      "title": "Nueva Actividad 🎈",
      "description": "Descripción de la actividad",
      "color": "primary",
      "side": "left"
    }
  ]
}
```

## 🚀 Funcionalidades Técnicas

- **Carga Asíncrona**: Los datos JSON se cargan de forma asíncrona
- **Fallbacks de Imágenes**: Sistema automático de imágenes de respaldo
- **Manejo de Errores**: Gestión robusta de errores de carga
- **Performance Optimizada**: Lazy loading y animaciones CSS optimizadas
- **SEO Friendly**: Estructura semántica y metadatos dinámicos

## 📱 Secciones Incluidas

1. **Hero Section**: Información principal con animaciones
2. **Contador Regresivo**: Tiempo real hasta la fiesta
3. **Galería de Fotos**: Slider interactivo
4. **Prueba Social**: Contador de invitados confirmados
5. **Ubicación**: Mapa e información de llegada
6. **Ideas de Regalos**: Catálogo visual de sugerencias
7. **Formulario RSVP**: Confirmación de asistencia paso a paso
8. **Timeline de Actividades**: Programación del evento
9. **Testimonios**: Reseñas de padres anteriores
10. **Información de Contacto**: Datos de contacto y emergencia

## 🎨 Personalización de Estilos

La página utiliza Tailwind CSS con variables CSS personalizadas. Los colores principales se pueden ajustar en `tailwind.config.js`:

```javascript
colors: {
  primary: '#FF6B9D',
  secondary: '#4ECDC4', 
  accent: '#45B7D1'
}
```

## 📋 Instalación y Uso

1. Clona o descarga los archivos
2. Modifica los archivos JSON según tus necesidades
3. Personaliza colores y estilos si lo deseas
4. Abre `pages/landing_page.html` en tu navegador
5. ¡Tu landing page personalizada está lista!

## 🔧 Mantenimiento

- **Actualizaciones de Contenido**: Solo edita los archivos JSON
- **Nuevas Imágenes**: Actualiza las URLs en `gallery-images.json`
- **Cambios de Programación**: Modifica `activities-schedule.json`
- **Textos**: Ajusta `party-content.json`

## 📞 Soporte

Para personalización adicional o soporte técnico, el código está completamente comentado y organizado de forma modular para facilitar futuras modificaciones.

---

**¡Hecho con ❤️ para celebraciones especiales!**