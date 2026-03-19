# GameGuardian Context

Sistema de seguridad contextual para proteger a niños en videojuegos online

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg)

---

## El Problema Real

Los videojuegos actuales (Roblox, Fortnite, Minecraft) tienen un vacío crítico de seguridad:

- Saben si un usuario es adulto o niño
- Pero **NO controlan qué adulto interactúa con qué niño**
- No supervisan el contexto de las interacciones
- Alertas reactivas, no prevención proactiva

**Resultado:** Adultos verificados pueden interactuar libremente con cualquier niño sin supervisión.

---

## Lo que Confirma el Informe Mundial de la Felicidad 2026

El informe publicado el 19 de marzo de 2026 por la ONU revela:

| Hallazgo | Implicancia |
|:---|:---|
| Las adolescentes que usan redes 5+ horas diarias reportan **menor satisfacción vital**  | El tiempo de pantalla no supervisado impacta negativamente |
| Los países con **lazos familiares fuertes** (ej: Costa Rica) están en el top de felicidad  | La protección empieza en la casa, no en la escuela |
| Las plataformas con feeds algorítmicos son las más dañinas | Se necesita restaurar el "contexto social" en las interacciones digitales |

> *"Deberíamos buscar, en la medida de lo posible, volver a poner lo 'social' en las redes sociales."*  
> — Investigadores del Informe Mundial de la Felicidad 2026

---

## Nuestra Solución

GameGuardian Context añade la **capa de contexto** que falta:

```
┌─────────────────────────────────────┐
│ SIN GameGuardian:                   │
│ "Este usuario es adulto"            │
│                                     │
│ CON GameGuardian:                    │
│ "Este adulto verificado está        │
│ autorizado para jugar con           │
│ ESTE niño específico,                │
│ por ESTE tiempo específico,          │
│ con supervisión activa"              │
└─────────────────────────────────────┘
```

---

## Características Principales

### Vinculación Verificada
- Padres registran hijos
- Especifican qué adultos pueden interactuar con cada niño
- Verificación de parentesco/tutoría

### Sesiones Supervisadas
- Tiempos máximos configurables
- Horarios restringidos
- Autorización requerida por sesión

### Alertas Inteligentes
- Detección de patrones sospechosos
- Notificaciones en tiempo real
- Intervención preventiva

### Integración Transparente
- API simple para videojuegos
- Dashboard para padres
- Compatible con múltiples plataformas

---

## El Núcleo del Problema (y Nuestra Filosofía)

Un niño informado no es el que sabe que "hay gente mala". Es el que:

- Sabe cómo funciona el algoritmo que le recomienda contenido
- Entiende por qué un adulto extraño quiere ser su "amigo"
- Reconoce cuándo una interacción cruza la línea
- Sabe que puede decir que no, bloquear, denunciar, y que en casa lo apoyarán

**La tecnología sola no alcanza.** La familia da la herramienta humana. GameGuardian da la herramienta técnica. Juntas forman un menor informado, crítico, capaz de defenderse.

---

## Integración con Plataformas

### Roblox
- Verificación de edad
- Autorización parental para interacciones
- Control de sesiones

### Fortnite
- Gestión de permisos por adulto
- Límites de tiempo configurables
- Alertas en tiempo real

### Minecraft
- Servidores permitidos/bloqueados
- Lista de contactos autorizados
- Supervisión de chats

---

## Estado del Proyecto

| Componente | Estado |
|:---|:---|
| API base | ✅ Completado |
| Dashboard padres | ✅ Completado |
| Integración Roblox | ⏳ En progreso |
| Integración Fortnite | ⏳ En progreso |
| App móvil | ⏳ Pendiente |

---

## Instalación

```bash
git clone https://github.com/enriqueherbertag-lgtm/GameGuardian-Context.git
cd GameGuardian-Context
npm install
npm run build
```

---

## Licencia

MIT

---

## Autor

**Enrique Aguayo H.**  
Investigador independiente, Mackiber Labs  
Contacto: eaguayo@migst.cl  
GitHub: [@enriqueherbertag-lgtm](https://github.com/enriqueherbertag-lgtm)

---

> *"El menor informado puede defenderse. No con miedo, sino con herramientas."*
