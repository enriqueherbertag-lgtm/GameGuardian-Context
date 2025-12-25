# Integración con Roblox

## Flujo de trabajo

### 1. Cuando un adulto quiere jugar con un niño en Roblox:

```javascript
// Código del cliente Roblox (ejemplo)
async function requestSupervisedSession() {
  const response = await fetch('https://api.gameguardian.com/api/sessions/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      adultId: 'adult_roblox_123',
      childId: 'child_roblox_456',
      relationship: 'uncle',
      game: 'Roblox',
      maxMinutes: 120
    })
  });

  const result = await response.json();
  
  if (result.success) {
    // Mostrar en UI: "Esperando autorización de padres"
    console.log('Sesión pendiente:', result.sessionId);
  }
}
