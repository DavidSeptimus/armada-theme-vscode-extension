## Armada Theme for VS Code

Armada is a dark theme inspired by the dark themes of JetBrains Fleet and Air, both now deprecated. It is optimized for VS Code's modern UI, which it colors after the Islands look of the [Armada theme for JetBrains IDEs](https://plugins.jetbrains.com/plugin/26844-armada-theme).

Armada Light is its light counterpart, colored after Armada Light for JetBrains IDEs. Both themes come with the extension: pick **Armada Dark** or **Armada Light** with **Preferences: Color Theme**.


### Screenshots

The screenshots show Armada, the dark theme.

With the theme alone, on VS Code's modern UI with pill tabs:

![Explorer, a Python file and the terminal](./images/overview.png)

With the [optional custom CSS](#optional-custom-css), which rounds the side bar and outlines the selected tabs:

<table>
  <tr>
    <td><a href="https://github.com/DavidSeptimus/armada-theme-vscode-extension/raw/HEAD/images/split-editors.png"><img src="./images/split-editors.png" alt="Two editor groups beside Source Control"></a></td>
    <td><a href="https://github.com/DavidSeptimus/armada-theme-vscode-extension/raw/HEAD/images/diff.png"><img src="./images/diff.png" alt="A diff of a modified file"></a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DavidSeptimus/armada-theme-vscode-extension/raw/HEAD/images/command-palette.png"><img src="./images/command-palette.png" alt="The Command Palette"></a></td>
    <td><a href="https://github.com/DavidSeptimus/armada-theme-vscode-extension/raw/HEAD/images/settings.png"><img src="./images/settings.png" alt="The Settings editor"></a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/DavidSeptimus/armada-theme-vscode-extension/raw/HEAD/images/git-history.png"><img src="./images/git-history.png" alt="The Source Control graph with branches and merges"></a></td>
    <td><a href="https://github.com/DavidSeptimus/armada-theme-vscode-extension/raw/HEAD/images/chat.png"><img src="./images/chat.png" alt="An agent session in the Chat view"></a></td>
  </tr>
</table>

### Islands-style tabs

With VS Code's modern UI, set the editor tabs to pills to get tabs like the ones in JetBrains' Islands themes:

```json
"workbench.experimental.modernUIEditorTabStyle": "pill"
```

### Semantic highlighting

Both themes turn semantic highlighting on, so languages are colored from what their language server knows about the code. Java and Kotlin, with JetBrains' [Java and Kotlin by IntelliJ IDEA](https://marketplace.visualstudio.com/items?itemName=JetBrains.intellij-server), are colored to match Armada for JetBrains IDEs. To go back to grammar-only colors, for every language or one:

```json
"editor.semanticHighlighting.enabled": false,
"[typescript]": { "editor.semanticHighlighting.enabled": false }
```

### Optional custom CSS

VS Code's theme colors can't express two parts of the Islands look, so [custom.css](./custom.css) adds them for anyone who already uses an extension that loads custom CSS into VS Code, such as [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css). It applies only while Armada or Armada Light is the active theme, and draws both the same way, each in its own colors.

- **Rounded side bar.** Armada's activity bar sits on the window's shell, as the tool window stripe does in JetBrains IDEs. VS Code rounds the activity bar's outer corners and leaves the side bar's square beside it, so the side bar looks cut off. The CSS rounds the side bar's outer corners.
- **Outlined tabs.** Armada fills the selected tab, but VS Code has no color for an outline on the selected tab only. The CSS outlines the selected editor tab, the selected tab of the panel, side bars, Settings editor and chat model picker, and the selected choice of a chat question. Tabs are blue where the focus is and grey elsewhere.

With Custom CSS and JS Loader: save `custom.css`, add it to `vscode_custom_css.imports` in your settings as a `file://` URL, run **Enable Custom CSS and JS** from the Command Palette, and restart VS Code.

Custom CSS patches VS Code's own files: VS Code reports the installation as unsupported, and the patch has to be applied again after each update. The selectors target VS Code 1.145's experimental modern UI and may need updating in later versions.

### Other Armada implementations

- [JetBrains IDEs](https://plugins.jetbrains.com/plugin/26844-armada-theme)
- [Tachi Code](https://tachicode.com)
