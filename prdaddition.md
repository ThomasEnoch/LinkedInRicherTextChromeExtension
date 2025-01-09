# LinkedIn Text Formatter PRD Addition

## Text Formatting Logic

### Selection-Based Formatting
When text is selected and a shortcut is pressed:
1. If no style is present, apply the pressed style
2. If the pressed style is present, remove only that style
3. If multiple styles are present (bold+italic), only toggle the pressed style

### Mode-Based Formatting
When no text is selected and a shortcut is pressed:
1. Toggle the mode for that style (bold or italic)
2. All subsequent typed characters should appear with that style
3. Multiple modes can be active (bold+italic)
4. Pressing the shortcut again disables that mode

### Character Style States
Each character can be in one of four states:
1. Normal (no formatting)
2. Bold only
3. Italic only
4. Bold + Italic

### Implementation Details
- Track active modes (bold, italic) in state
- For selected text:
  - Parse current styles of each character
  - Toggle only the requested style
  - Maintain other styles
- For mode-based typing:
  - Apply all active modes to new characters
  - Backspace should work normally
