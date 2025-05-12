---
title: "Cómo manejar lesiones en Hattrick"
date: 2025-03-18
difficulty: "Intermedio"
categories: ["Médico"]
tags: ["lesiones", "recuperación", "médico", "entrenamiento"]
excerpt: "Descubre cómo reducir las lesiones en tu equipo y gestionar la recuperación de los jugadores."
toc: true
lastUpdated: "2025-04-01"
---

## Guía completa de manejo de lesiones

<details>
<summary>📌 **Tipos de lesiones y su gravedad**</summary>
</details>

## Clasificación de lesiones

### Hattrick distingue 4 niveles de lesiones:

| Días de recuperación | Tipo      | Reducción de rendimiento |
| -------------------- | --------- | ------------------------ |
| 1-3                  | Leve      | -5%                      |
| 4-7                  | Moderada  | -15%                     |
| 8-14                 | Grave     | -30%                     |
| 15+                  | Muy grave | -50%                     |

**Ejemplo práctico**: Un jugador con lesión grave (10 días) mostrará:

- 30% menos de su habilidad principal
- 50% más de probabilidad de empeorar la lesión si juega

<details>
<summary>⚕️ **Cómo acelerar la recuperación**</summary>
   </details>

## Factores que afectan la curación

1. **Nivel del médico del equipo**:

   - Médico pobre: +0 días de recuperación
   - Médico excelente: -20% tiempo de curación

2. **Instalaciones médicas**:
   ```python
   # Fórmula aproximada de reducción
   if instalaciones == "Básicas":
       reducción = 0%
   elif instalaciones == "Avanzadas":
       reducción = 15%
   else: # Estado del arte
       reducción = 25%
   ```
