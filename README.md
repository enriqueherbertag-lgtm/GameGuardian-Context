# GameGuardian Context

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

**Sistema de seguridad contextual para proteger a niños en videojuegos online.**

GameGuardian Context añade la capa de contexto que falta en las plataformas de videojuegos: no solo verifica si un usuario es adulto, sino que controla **qué adulto interactúa con qué niño**, **por cuánto tiempo**, y **con qué supervisión**.

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
|----------|-------------|
| Las adolescentes que usan redes 5+ horas diarias reportan **menor satisfacción vital** | El tiempo de pantalla no supervisado impacta negativamente |
| Los países con **lazos familiares fuertes** (ej: Costa Rica) están en el top de felicidad | La protección empieza en la casa, no en la escuela |
| Las plataformas con feeds algorítmicos son las más dañinas | Se necesita restaurar el "contexto social" en las interacciones digitales |

> *"Deberíamos buscar, en la medida de lo posible, volver a poner lo 'social' en las redes sociales."*  
> — Investigadores del Informe Mundial de la Felicidad 2026

---

## Nuestra Solución

GameGuardian Context añade la **capa de contexto** que falta:

┌─────────────────────────────────────────────────────────────┐
│ SIN GameGuardian: │
│ "Este usuario es adulto" │
│ │
│ CON GameGuardian: │
│ "Este adulto verificado está autorizado para jugar con │
│ ESTE niño específico, por ESTE tiempo específico, │
│ con supervisión activa" │
└─────────────────────────────────────────────────────────────┘


---

## Especificaciones Técnicas

| Componente | Tecnología | Estado |
|------------|------------|--------|
| **API Base** | Node.js + Express | ✅ Completado |
| **Dashboard Padres** | React / Vue | ✅ Completado |
| **Base de Datos** | PostgreSQL | ✅ Completado |
| **Autenticación** | JWT + OAuth2 | ✅ Completado |
| **Integración Roblox** | API Roblox | 🔲 En desarrollo |
| **Integración Fortnite** | Epic Games API | 🔲 En desarrollo |
| **App Móvil** | React Native / Flutter | 🔲 Pendiente |

---

## Características Principales

### Vinculación Verificada
- Padres registran hijos
- Especifican qué adultos pueden interactuar con cada niño
- Verificación de parentesco/tutoría

### Sesiones Supervisadas
- Tiempos máximos configurables (ej. 30–120 min)
- Horarios restringidos (ej. solo fines de semana)
- Autorización requerida por sesión

### Alertas Inteligentes
- Detección de patrones sospechosos (ej. mensajes repetitivos, horarios inusuales)
- Notificaciones en tiempo real (push, email, SMS)
- Intervención preventiva con bloqueo automático

### Integración Transparente
- API REST para videojuegos
- Webhooks para eventos en tiempo real
- Compatible con múltiples plataformas

---

## Integración con Plataformas

| Plataforma | Funcionalidad |
|------------|---------------|
| **Roblox** | Verificación de edad, autorización parental, control de sesiones |
| **Fortnite** | Gestión de permisos por adulto, límites de tiempo configurables, alertas en tiempo real |
| **Minecraft** | Servidores permitidos/bloqueados, lista de contactos autorizados, supervisión de chats |

---

## Estado actual

✅ API base completada  
✅ Dashboard padres completado  
✅ Autenticación y autorización completadas  
🔲 Integración Roblox  
🔲 Integración Fortnite  
🔲 App móvil

---

## Próximos pasos

1. **Integración Roblox** — Desarrollar conector usando API oficial.
2. **Integración Fortnite** — Implementar usando Epic Games API.
3. **App Móvil** — Desarrollar versión nativa para iOS y Android.
4. **Pruebas de seguridad** — Validar contra ataques de suplantación y bypass.

---

## Proyectos relacionados

- **CORPUS** — sistema corporal artificial para IA  
  [Repositorio](https://github.com/enriqueherbertag-lgtm/Corpus)
- **ENA** — interfaz cerebro-máquina no invasiva  
  [Repositorio](https://github.com/enriqueherbertag-lgtm/ENA-Enlace-Neural-Avatar)
- **ShieldAir** — torres de producción de oxígeno  
  [Urban](https://github.com/enriqueherbertag-lgtm/ShieldAir-Urban) | [Mars](https://github.com/enriqueherbertag-lgtm/ShieldAir-Mars)

---

## Licencia

**CC BY-NC 4.0 (Attribution-NonCommercial 4.0 International)**

Este proyecto está liberado bajo una licencia Creative Commons que permite:
- ✅ Compartir y modificar
- ✅ Uso personal, investigación, prototipos
- ❌ **No permite uso comercial sin autorización expresa**

**¿Quieres usar este diseño comercialmente?**  
Contacta para una licencia comercial: **eaguayo@migst.cl**

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

---

## Autor

**Enrique Aguayo H.**  
Investigador independiente, Mackiber Labs  
Contacto: eaguayo@migst.cl  
ORCID: 0009-0004-4615-6825  
GitHub: [@enriqueherbertag-lgtm](https://github.com/enriqueherbertag-lgtm)

> *"El menor informado puede defenderse. No con miedo, sino con herramientas."*
