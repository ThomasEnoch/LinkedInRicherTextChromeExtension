# LinkedIn Text Formatter Chrome Extension

A Chrome extension that adds keyboard shortcuts for formatting text in LinkedIn's input fields. Format your posts, comments, and messages with bold and italic styles using Unicode characters.

## Project Overview
### Event Handling
- Listens for keyboard events (Ctrl+B, Ctrl+I) on LinkedIn's text input fields
- Intercepts these events to prevent default browser behavior
- Handles both text selection and direct typing scenarios

### Text Formatting
- **Selection Mode**: Transforms only highlighted text while preserving existing styles
- **Typing Mode**: Automatically formats new characters as you type
- Uses Unicode character mappings instead of HTML tags for compatibility

### Character Mapping System
- Maintains separate mapping tables for:
  - Bold characters
  - Italic characters
  - Combined bold+italic characters
- Includes reverse mappings to detect and preserve existing styles

### Key Features
- Toggle individual styles (bold/italic) independently
- Preserve other styles when toggling one style
- Support for both uppercase and lowercase characters
- Handle edge cases like removing one style from multi-styled text

### Code Architecture
- Modular helper functions for:
  - Character state management
  - Style detection and application
  - Text selection and insertion
- Designed for extensibility to support additional styles

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ThomasEnoch/LinkedInRicherTextChromeExtension.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the `dist` directory

## Usage

1. **Selection-Based Formatting**:
   - Select text in any LinkedIn input field
   - Press `Ctrl+B` for bold or `Ctrl+I` for italic
   - Press again to remove that style

2. **Mode-Based Formatting**:
   - Place cursor in a LinkedIn input field
   - Press `Ctrl+B` or `Ctrl+I` without selecting text
   - Type to insert formatted text
   - Press the same shortcut to exit formatting mode

## Development

1. Clone and install dependencies:
   ```bash
   git clone https://github.com/ThomasEnoch/LinkedInRicherTextChromeExtension.git
   cd linkedin-text-formatter
   npm install
   ```

2. Make changes to the source code in the `src` directory

3. Build the extension:
   ```bash
   npm run build
   ```

4. Reload the extension in Chrome to see your changes

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
