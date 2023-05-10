# arquétipo

## VSCode

### Extensões

* **ESLint**: dbaeumer.vscode-eslint
* **EditorConfig**: editorconfig.editorconfig
* **Prettier**: esbenp.prettier-vscode
* **Stylelint**: stylelint.vscode-stylelint

### Configurações

```json
{
  // permite que o import/resolver.alias funcione no modo multipastas.
  // força o eslint a rodar a partir do diretório do package.json
  "eslint.workingDirectories": [{ "mode": "auto" }],
  "stylelint.validate": ["css", "less", "sass", "scss"],
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
