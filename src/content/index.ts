// Character maps for formatting
const boldMap: { [key: string]: string } = {
    'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜',
    'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥',
    'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶',
    'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿',
    's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
    '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
};

const italicMap: { [key: string]: string } = {
    'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐',
    'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙',
    'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
    'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪',
    'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳',
    's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
};

const boldItalicMap: { [key: string]: string } = {
    'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄',
    'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍',
    'S': '𝙎', 'T': '𝙏', 'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
    'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞',
    'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧',
    's': '𝙨', 't': '𝙩', 'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯'
};

// Create reverse maps for each style
const reverseMaps = {
    bold: new Map(Object.entries(boldMap).map(([k, v]) => [v, k])),
    italic: new Map(Object.entries(italicMap).map(([k, v]) => [v, k])),
    boldItalic: new Map(Object.entries(boldItalicMap).map(([k, v]) => [v, k]))
};

// Initialize state
const state = {
    isBoldMode: false,
    isItalicMode: false
};

// Get the normal character from a formatted one
function getNormalChar(char: string): string {
    // Check each map in order
    for (const [style, map] of Object.entries(reverseMaps)) {
        if (map.has(char)) {
            return map.get(char)!;
        }
    }
    return char; // If not found in any map, return as is
}

// Get the current state of a character
function getCharacterState(char: string): { bold: boolean; italic: boolean } {
    // First convert to normal character if it's formatted
    const normalChar = getNormalChar(char);
    
    // Check if the character exists in each map
    return {
        bold: reverseMaps.bold.has(char) || reverseMaps.boldItalic.has(char),
        italic: reverseMaps.italic.has(char) || reverseMaps.boldItalic.has(char)
    };
}

// Transform a character based on desired state
function transformCharacter(char: string, state: { bold: boolean; italic: boolean }): string {
    // First get the normal character
    const normalChar = getNormalChar(char);
    
    // Then apply the requested formatting
    if (state.bold && state.italic && boldItalicMap[normalChar]) {
        return boldItalicMap[normalChar];
    }
    if (state.bold && boldMap[normalChar]) {
        return boldMap[normalChar];
    }
    if (state.italic && italicMap[normalChar]) {
        return italicMap[normalChar];
    }
    return normalChar;
}

// Toggle a style on a character
function toggleCharacterStyle(char: string, style: 'bold' | 'italic'): string {
    const currentState = getCharacterState(char);
    const newState = {
        bold: style === 'bold' ? !currentState.bold : currentState.bold,
        italic: style === 'italic' ? !currentState.italic : currentState.italic
    };
    return transformCharacter(char, newState);
}

// Transform text based on current mode
function transformNewText(text: string, isBold: boolean, isItalic: boolean): string {
    return Array.from(text).map(char => 
        transformCharacter(char, { bold: isBold, italic: isItalic })
    ).join('');
}

// Toggle style on selected text
function toggleStyle(text: string, style: 'bold' | 'italic'): string {
    return Array.from(text).map(char => toggleCharacterStyle(char, style)).join('');
}

// Get selected text from an element
function getSelectedText(element: HTMLElement): string {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        const start = element.selectionStart;
        const end = element.selectionEnd;
        return start !== null && end !== null ? element.value.substring(start, end) : '';
    }
    const selection = window.getSelection();
    return selection ? selection.toString() : '';
}

// Replace selected text in an element
function replaceSelectedText(element: HTMLElement, newText: string): void {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        const start = element.selectionStart;
        const end = element.selectionEnd;
        
        if (start !== null && end !== null) {
            const beforeText = element.value.substring(0, start);
            const afterText = element.value.substring(end);
            element.value = beforeText + newText + afterText;
            
            // Restore cursor position
            const newPosition = start + newText.length;
            element.setSelectionRange(newPosition, newPosition);
        }
    } else if (element.isContentEditable) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(newText));
            
            // Move cursor to end
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}

// Handle keyboard events
function handleKeyboardEvent(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    // Only handle events in text inputs or contenteditable elements
    if (!target.matches('input[type="text"], textarea') && !target.isContentEditable) {
        return;
    }

    console.log('Key event:', {
        key: event.key,
        ctrl: event.ctrlKey,
        target: target.tagName,
        state: { ...state }
    });

    // Handle Ctrl+B for bold
    if (event.ctrlKey && event.key.toLowerCase() === 'b') {
        event.preventDefault();
        const selectedText = getSelectedText(target);
        
        if (selectedText) {
            // Toggle bold on selection
            const transformedText = toggleStyle(selectedText, 'bold');
            replaceSelectedText(target, transformedText);
        } else {
            // Toggle bold mode
            state.isBoldMode = !state.isBoldMode;
        }
    }

    // Handle Ctrl+I for italic
    if (event.ctrlKey && event.key.toLowerCase() === 'i') {
        event.preventDefault();
        const selectedText = getSelectedText(target);
        
        if (selectedText) {
            // Toggle italic on selection
            const transformedText = toggleStyle(selectedText, 'italic');
            replaceSelectedText(target, transformedText);
        } else {
            // Toggle italic mode
            state.isItalicMode = !state.isItalicMode;
        }
    }

    // Handle regular typing when in a formatting mode
    if (!event.ctrlKey && event.key.length === 1 && (state.isBoldMode || state.isItalicMode)) {
        event.preventDefault();
        const newChar = transformNewText(event.key, state.isBoldMode, state.isItalicMode);
        replaceSelectedText(target, newChar);
    }
}

// Listen for keyboard events
document.addEventListener('keydown', handleKeyboardEvent);

// Log when extension is loaded
console.log('LinkedIn Text Formatter loaded', { state });
