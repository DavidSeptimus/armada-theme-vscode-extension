# Change Log

## [Unreleased]

## 2.2.0 - 2026-11-20

### Changed

- CSS highlighting that follows Armada for JetBrains IDEs: violet selectors, teal property names, pink values, green at-rules and `!important`, violet functions, yellow units and hex colors, and underlined URLs
- SCSS follows the same colors, with blue variables, green control rules such as `@if` and `@each`, and violet mixin, function, and placeholder names
- Less at-rules are green and its built-in functions violet, matching CSS

### Fixed

- Java fields declared in enums, records, and anonymous classes are violet like other fields when no language server is running
- Terminal text printed in white or bright white is visible; both matched the terminal background before
- The terminal's black is a dark gray, so programs that paint a black background no longer get a near-white block

## 2.1.0 - 2026-11-19

### Changed

- Semantic highlighting is on: languages whose extension reports semantic tokens are colored from them, with type parameters light blue and decorators green

### Added

- Kotlin highlighting that follows Armada for JetBrains IDEs, using the semantic tokens of [Java and Kotlin by IntelliJ IDEA](https://marketplace.visualstudio.com/items?itemName=JetBrains.intellij-server): green annotations, bold function declarations, violet properties, italic top-level properties and enum entries, and light blue type parameters and named arguments
- Java highlighting that follows Armada for JetBrains IDEs: blue type names, violet fields and enum constants, upright parameters, plain package names, teal `this`, and green annotation attribute names
- Colors for the Kotlin grammars of other extensions: green annotations, bold function declarations, and teal `this` and string template markers

## 2.0.1 - 2026-11-19

### Fixed

- The active tab no longer has a line above it in the classic layout, as seen in VSCodium and in VS Code with the modern UI turned off

## 2.0.0 - 2026-11-19

### Changed

- Optimized for VS Code's modern UI, colored after the Islands look of Armada for JetBrains IDEs: the window shell, the floating side bar, editor and panel, the activity bar, and pill tabs
- Search and find matches use Armada's search highlight in place of teal, occurrences of the symbol under the caret are highlighted, and the matching bracket is green
- Git decorations follow Armada's file status colors: modified is blue, added green, untracked red, ignored orange, and deleted grey. Modified lines in the gutter are blue
- Warnings are yellow in place of orange
- Symbol icons use the colors of the JetBrains icons for classes, interfaces, methods, fields, and enums
- Text inputs take the color of the panel they sit on and are set off by their border; dropdowns in Settings match other dropdowns
- Greys that were off Armada's palette move onto its neutral ramp
- The description now names both of the theme's inspirations, the dark themes of JetBrains Fleet and Air

### Added

- Colors for parts VS Code used to fill in itself: debugging, testing, charts, chat, the Source Control graph, the merge editor, input validation, and status bar states
- A color for Mermaid operators
- `custom.css`, optional CSS that rounds the side bar and outlines the selected tabs, for use with a custom CSS loader
- New screenshots

## 1.0.1 - 2025-09-20

### Added

- Screenshots, an icon, and Marketplace keywords

## 1.0.0 - 2025-09-20

### Added

- Initial release
