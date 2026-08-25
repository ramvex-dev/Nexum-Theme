# Nexum

Un tema oscuro personalizado para VS Code.

---

## Requisitos

Para compilar el tema necesitas tener instalado **Node.js** y la herramienta oficial de empaquetado de VS Code (`vsce`).

1. Instala **Node.js** (si aún no lo tienes): <https://nodejs.org/>
2. Abre la terminal (CMD o PowerShell) e instala `vsce` globalmente:

```bash
npm install -g @vscode/vsce
```

---

## Compilar el Tema (generar el `.vsix`)

Abre la terminal en la raíz del proyecto (`g:/proyectos/Nexum`) y ejecuta:

```bash
vsce package
```

Al finalizar, se creará un archivo con extensión `.vsix` en la carpeta del proyecto (por ejemplo: `Nexum-1.0.0.vsix`).

> **Nota:** Este proyecto ya incluye el campo `repository` en el `package.json` y el archivo `LICENSE`, por lo que no son necesarios flags adicionales. Si en algún momento faltan, puedes empaquetar omitiendo las advertencias con:
>
> ```bash
> vsce package --allow-missing-repository --no-git-tag-version
> ```

---

## Instalar el Tema en VS Code

### Método 1: Desde la interfaz de VS Code

1. Abre **Visual Studio Code**.
2. Ve a la pestaña de **Extensiones** (`Ctrl + Shift + X`).
3. Haz clic en el menú de los **tres puntos (...)** en la parte superior derecha del panel de extensiones.
4. Selecciona **Instalar desde VSIX...** (*Install from VSIX...*).
5. Selecciona el archivo `Nexum-1.0.0.vsix` generado.
6. Presiona `Ctrl + K` seguido de `Ctrl + T` para abrir el selector de temas y activa **Nexum Dark**.

### Método 2: Desde la línea de comandos (CLI)

Ejecuta en la terminal, desde la carpeta del proyecto:

```bash
code --install-extension Nexum-1.0.0.vsix
```
