---
title: "Guía Completa de Sustituciones en Hattrick"
date: 2025-06-21
lastUpdated: 2025-06-21
author: "Equipo Hattrick"
excerpt: "Domina el arte de las sustituciones: desde cambios automáticos por lesión hasta estrategias tácticas avanzadas para ganar partidos."
description: "Aprende a configurar sustituciones condicionales, cambios de comportamiento y estrategias tácticas para maximizar el rendimiento de tu equipo."
tags: [hattrick, sustituciones, táctica, estrategia, partidos]
hero_image: "/assets/img/sustituciones-hattrick.webp"
hero_alt: "Entrenador dando instrucciones a jugadores en la banda durante una sustitución"
featured: false
difficulty: intermedio
---

Las sustituciones son una herramienta táctica fundamental que puede cambiar el rumbo de un partido. Más allá de los cambios automáticos por lesión, dominar las sustituciones condicionales te permitirá ejecutar movimientos tácticos maestros y adaptar tu estrategia según el desarrollo del juego.

## Tipos de Sustituciones en Hattrick

### 1. Sustituciones Automáticas por Lesión

Como se mencionó en el capítulo de alineación, **si uno de tus jugadores se lesiona, el sustituto para esa posición entrará al campo automáticamente**. Este es el tipo más básico de sustitución y no requiere configuración previa.

### 2. Sustituciones Condicionales

Las sustituciones condicionales son el corazón de la estrategia táctica avanzada. Te permiten **configurar cambios anticipados** basados en diferentes condiciones del partido.

> **Ventaja clave**: Puedes planificar movimientos tácticos maestros o simplemente cambiar jugadores cansados por frescos según el desarrollo del juego.

## Configurando Sustituciones Condicionales

### Acceso a la Configuración

Para configurar una sustitución condicional:

1. Ve a la pestaña **"Sustituciones/Órdenes"** en las Instrucciones para el partido
2. Selecciona al **jugador que quieres que abandone el campo**
3. Elige al **sustituto que entrará**
4. Define las **condiciones de la sustitución**

### Tipos de Condiciones Disponibles

#### Condiciones Básicas

- **Por tiempo**: Sustitución después de cierto minuto
- **Por resultado**: Dependiendo de si vas ganando, perdiendo o empatando

#### Condiciones Avanzadas

- **Combinación tiempo + resultado**: Mayor precisión táctica
- **Tarjetas rojas**: Reaccionar ante expulsiones (propias o del rival)
- **Cambios de posición**: Reorganizar la formación

## Estrategias Tácticas Comunes

### 🛡️ **Asegurar Ventaja (Posición Defensiva)**

```
Situación: Vas ganando 2-0 en el minuto 70
Acción: Cambiar un delantero por un defensa central
Objetivo: Fortalecer la defensa y mantener el resultado
```

### ⚔️ **Buscar el Empate/Victoria (Posición Ofensiva)**

```
Situación: Vas perdiendo 0-1 en el minuto 75
Acción: Cambiar un defensa por un delantero
Objetivo: Aumentar el potencial ofensivo
```

### 🔄 **Cambio por Frescura**

```
Situación: Minuto 60, cualquier marcador
Acción: Cambiar un jugador cansado por uno fresco
Objetivo: Mantener el rendimiento físico del equipo
```

## Cambios de Comportamiento

### ¿Qué son los Cambios de Comportamiento?

Además de las sustituciones, puedes configurar **cambios en las órdenes individuales** de jugadores que ya están en el campo, sin necesidad de sustituirlos.

### Ejemplos Prácticos

- Cambiar un extremo de "Ofensivo" a "Defensivo" si vas ganando
- Modificar un mediocampista de "Normal" a "Hacia adelante" si necesitas goles
- Ajustar las instrucciones de un defensa según el desarrollo del partido

## Limitaciones y Reglas Importantes

### 📊 **Límites del Sistema**

| Concepto                     | Límite            | Detalle                                           |
| ---------------------------- | ----------------- | ------------------------------------------------- |
| **Órdenes totales**          | 5 máximo          | Incluye sustituciones y cambios de comportamiento |
| **Sustituciones reales**     | 3 máximo          | Limitación del reglamento de fútbol               |
| **Momento de configuración** | Antes del partido | No se pueden hacer cambios en tiempo real         |

### ⚠️ **Reglas de Ejecución**

**Todas las órdenes se ejecutan solo si:**

- Fueron configuradas **antes del comienzo del partido**
- Las **condiciones específicas se cumplen**
- No se han agotado las **3 sustituciones permitidas**

## Ejemplos Detallados de Ejecución

### Caso 1: Sustitución por Tiempo

```
Configuración: Sustitución en minuto 65, cualquier marcador
Resultado: Se ejecuta exactamente en el minuto 65
```

### Caso 2: Sustitución Condicional

```
Configuración: Sustitución en minuto 70 si estás ganando
Resultado: Se ejecuta en cualquier momento después del minuto 70
cuando pases a ganar (ej: si empatas 1-1 y en el minuto 80 haces el 2-1)
```

### Caso 3: Múltiples Condiciones

```
Configuración:
- Orden A: Minuto 70 si estás ganando
- Orden B: Minuto 70 si estás ganando por +2 goles

Situación: Minuto 70, resultado 3-0 a favor
Resultado: Ambas órdenes se ejecutan (cumplen ambas condiciones)
```

### ⚡ **Regla de Órdenes Simultáneas**

Si configuras dos órdenes con **exactamente las mismas condiciones**, no se ejecutarán simultáneamente, sino **en el orden en que fueron creadas**.

## Gestión de Lesiones: Planificación Avanzada

### Limitaciones en Tiempo Real

**No puedes hacer cambios en tiempo real** cuando un jugador se lesiona. Sin embargo, puedes planificar escenarios por adelantado.

### Comportamiento del Asistente

Cuando un jugador se lesiona:

1. **El asistente automáticamente** escoge un sustituto de la banca
2. **Prioriza jugadores** designados para la posición vacante
3. **El sustituto hereda** las instrucciones individuales del lesionado

### Estrategias Preventivas

#### Evitar Herencia de Instrucciones

```
Problema: Un extremo ofensivo se lesiona y entra un sustituto con altas jugadas
Solución: Configurar orden condicional previa para cambiar las instrucciones
del sustituto (ej: de "hacia afuera" a "hacia el medio")
```

#### Reorganización Táctica Preventiva

```
Escenario: Si se lesiona el delantero titular
Planificación: Configurar cambio de posición de un extremo a delantero
+ entrada de nuevo extremo desde la banca
```

## Seguimiento Post-Partido

### Información Disponible

Después del partido puedes revisar:

- **Todas tus órdenes configuradas** (no las del rival)
- **Cuáles se ejecutaron** y cuáles no
- **Razones por las que no se ejecutaron** ciertas órdenes
- **Momento exacto de ejecución**

Esta información está disponible en la **página de calificación de estrellas**.

## Estrategias Avanzadas

### 🎯 **Planificación por Tipo de Rival**

#### Contra Equipos Fuertes

- Configurar cambios defensivos temprano si tomas ventaja
- Preparar sustituciones ofensivas para los últimos 20 minutos si vas perdiendo

#### Contra Equipos Débiles

- Cambios por frescura para mantener ritmo
- Sustituciones ofensivas para ampliar ventaja

### 🧠 **Psicología del Rival**

- Cambios sorpresivos pueden desestabilizar la estrategia rival
- Sustituciones defensivas pueden presionar al rival a tomar más riesgos

### ⏱️ **Gestión del Tiempo**

- Sustituciones en minutos clave (60', 70', 80') para maximizar impacto
- Cambios tardíos para mantener frescura en momentos decisivos

## Errores Comunes a Evitar

### ❌ **Errores de Configuración**

- **No definir condiciones claras**: Puede resultar en sustituciones no deseadas
- **Exceso de órdenes**: Más de 5 órdenes no se ejecutarán
- **Configuración tardía**: Órdenes puestas después del inicio no funcionan

### ❌ **Errores Tácticos**

- **Cambios demasiado tempranos**: Pueden limitar opciones posteriores
- **No considerar las tarjetas**: Ignorar posibles expulsiones
- **Falta de plan B**: No tener alternativas si las condiciones no se cumplen

## Consejos de Experto

### 💡 **Optimización de Órdenes**

1. **Prioriza las más probables**: Configura primero las sustituciones más likely
2. **Planifica escenarios múltiples**: Considera diferentes situaciones de partido
3. **Revisa historial**: Analiza qué funcionó en partidos anteriores

### 💡 **Coordinación con Táctica**

- **Alinea con tu estrategia**: Las sustituciones deben complementar tu táctica base
- **Considera la condición**: Jugadores cansados rinden menos
- **Aprovecha especialidades**: Usa las fortalezas específicas de cada jugador

## Conclusión

**Las sustituciones son un arte que combina planificación estratégica, conocimiento táctico y capacidad de anticipación**. Dominar este sistema te permitirá:

- Adaptar tu estrategia según el desarrollo del partido
- Maximizar el rendimiento de tu plantilla
- Tomar ventaja de situaciones específicas
- Minimizar el impacto de las lesiones

**La clave está en la preparación**: cuanto mejor planifiques tus sustituciones, mayor será tu capacidad de influir en el resultado final del partido.

---

_Recuerda: En Hattrick, los detalles marcan la diferencia. Una sustitución bien planificada puede ser la diferencia entre la victoria y la derrota._
