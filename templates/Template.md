# MARKDOWN SYNTAX COLOR TEST

> **Nota:** Archivo diseñado para probar los diferentes tokens de
> coloreado de sintaxis en Visual Studio Code.

<!-- Los comentarios HTML en Markdown no se muestran al renderizar.
     TODO: revisar esta sección
     FIXME: corregir este comportamiento
     NOTE: información importante -->

---

## 1. Encabezados (Headings)

# Encabezado Nivel 1
## Encabezado Nivel 2
### Encabezado Nivel 3
#### Encabezado Nivel 4
##### Encabezado Nivel 5
###### Encabezado Nivel 6

Encabezado Setext Nivel 1
=========================

Encabezado Setext Nivel 2
-------------------------

## Encabezado con cierre ##
### Otro encabezado cerrado ###

---

## 2. Párrafos y saltos de línea

Este es un párrafo normal
que continúa en la siguiente línea.

Este párrafo termina con dos espacios  
lo que crea un salto de línea.

Este párrafo tiene una barra invertida al final\
que también crea un salto de línea.

---

## 3. Énfasis

*Itálica con asteriscos*

_Itálica con guiones bajos_

**Negrita con asteriscos**

__Negrita con guiones bajos__

***Negrita itálica combinada***

**_Negrita con itálica anidada_**

~~Texto tachado (strikethrough)~~

Texto con *énfasis* en **el medio** de ~~una frase~~ normal.

---

## 4. Código

Código en línea: `const variable = "Hello World";`

Código con dobles tildes: ``console.log("test")``

Código que contiene tildes: `` `código anidado` ``

Bloque de código cercado con lenguaje:

```javascript
function helloWorld() {
    const message = `Hello ${"World"}`;
    console.log(message);
    return true;
}
```

```python
def calculate_sum(a: int, b: int) -> int:
    """Calcula la suma de dos números."""
    return a + b
```

```css
.container {
    display: flex;
    color: #4f7df3;
}
```

```json
{
    "name": "Manu",
    "age": 30,
    "active": true
}
```

```html
<div class="container">
    <span id="title">Hello</span>
</div>
```

Bloque indentado (4 espacios):

    function indented() {
        return "Bloque indentado";
    }

---

## 5. Listas

Lista no ordenada con guiones:

- Elemento uno
- Elemento dos
- Elemento tres

Lista con asteriscos:

* Elemento uno
* Elemento dos

Lista con signos más:

+ Elemento uno
+ Elemento dos

Lista ordenada:

1. Primero
2. Segundo
3. Tercero

Lista ordenada con numeración implícita:

1. Primero
1. Segundo
1. Tercero

Listas anidadas:

- Nivel 1
  - Nivel 2
    - Nivel 3
      - Nivel 4

1. Nivel 1
   1. Nivel 2
      1. Nivel 3

Lista con párrafos y código:

- Elemento con párrafo

  Segundo párrafo del elemento.

- Elemento con código:

  ```
  const inlineBlock = true;
  ```

Listas de tareas (task lists):

- [ ] Tarea pendiente
- [x] Tarea completada
- [ ] Otra tarea pendiente

---

## 6. Enlaces

[Enlace inline](https://example.com)

[Enlace con título](https://example.com "Título del enlace")

[Enlace de referencia][referencia]

[Referencia implícita][]

[Referencia con espacios][mi referencia]

Autolink: <https://example.com>

Autolink de correo: <mailto:manu@example.com>

[referencia]: https://example.com "Título de referencia"
[mi referencia]: https://example.com/spaces

---

## 7. Imágenes

![Texto alternativo](https://example.com/image.png)

![Imagen con título](https://example.com/image.png "Título de la imagen")

![Imagen de referencia][logo]

[logo]: https://example.com/logo.png "Logo del proyecto"

---

## 8. Citas (Blockquotes)

> Esta es una cita de una sola línea.

> Esta cita continúa
> en varias líneas
> sin espacios entre ellas.

> Cita de nivel 1
> > Cita de nivel 2
> > > Cita de nivel 3

> Cita con **negrita**, *itálica* y `código`.

---

## 9. Tablas

| Columna 1 | Columna 2 | Columna 3 |
|:----------|:---------:|----------:|
| Izquierda | Centro    | Derecha   |
| Manu      | 30        | Madrid    |
| Juan      | 25        | Barcelona |

Tabla con formato dentro de celdas:

| Función | Sintaxis    | Estado |
|---------|-------------|:------:|
| Negrita | `**texto**` | ✅     |
| Itálica | `*texto*`   | ✅     |
| Tachado | `~~texto~~` | ✅     |

---

## 10. Líneas horizontales

Tres guiones:

---

Tres asteriscos:

***

Tres guiones bajos:

___

---

## 11. Caracteres escapados

\*esto no es énfasis\*

\# esto no es un encabezado

\- esto no es una lista

1\. esto no es una lista ordenada

\[esto no es un enlace\]

\`esto no es código\`

\\ barra invertida escapada

\<etiquetas escapadas\>

---

## 12. Notas al pie

Texto con una nota al pie[^1] y otra nota con nombre[^nota].

[^1]: Esta es la primera nota al pie.
[^nota]: Esta es una nota con nombre personalizado.

---

## 13. HTML embebido

<div class="container">
    <span id="title">HTML dentro de Markdown</span>
</div>

<span style="color: red;">Texto con estilo inline</span>

<details>
    <summary>Haz clic para expandir</summary>
    Contenido colapsable dentro de un elemento details.
</details>

<br>

<table>
    <tr>
        <th>Tabla</th>
        <th>HTML</th>
    </tr>
    <tr>
        <td>Celda 1</td>
        <td>Celda 2</td>
    </tr>
</table>

---

## 14. Emojis y caracteres especiales

:smile: :heart: :thumbsup:

© ® ™ § ¶ † ‡ • … ‰ € ← → ↔

✅ ❌ ⚠️ ℹ️

---

<!--
 * ============================================================
 * TOKENS NOT APPLICABLE TO MARKDOWN
 * ============================================================
 *
 * Keywords & Control Flow    -> lenguajes de programación
 * Function Declarations      -> lenguajes de programación
 * Object Keys / Properties   -> JavaScript / JSON
 * Regular Expressions        -> lenguajes de programación
 * CSS Properties             -> CSS (bloques de código embebidos)
 * Tags (HTML/XML)            -> HTML / XML (HTML embebido)
 * Attributes                 -> HTML / XML (HTML embebido)
 * JSX / TSX Components       -> React / TypeScript
 *
 ============================================================
-->