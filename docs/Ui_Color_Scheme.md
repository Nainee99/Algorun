# **UI Color Scheme and Code Editor Themes**

This document outlines the color scheme for the UI, including both **light** and **dark** modes, and the customizable code editor themes for user settings.

---

## **1. Overall Color Scheme**

### **Light Mode**
- **Background**: `#ffffff`
- **Primary Text**: `#333333`
- **Secondary Text**: `#666666`
- **Accent/Primary**: `#3b82f6` (blue for buttons and highlights)
- **Borders/Dividers**: `#e5e7eb` (light gray)
- **Navbar/Sidebar**: `#f8fafc` (cool gray)
- **Hover States**: `#2563eb` (slightly darker blue)

### **Dark Mode**
- **Background**: `#1e293b`
- **Primary Text**: `#f8fafc`
- **Secondary Text**: `#94a3b8` (muted gray)
- **Accent/Primary**: `#14b8a6` (teal for buttons and highlights)
- **Borders/Dividers**: `#334155` (darker gray)
- **Navbar/Sidebar**: `#0f172a` (very dark gray)
- **Hover States**: `#2dd4bf` (slightly brighter teal)

---

## **2. Detailed Color Usage by UI Element**

| **Element**           | **Light Mode**           | **Dark Mode**            |
|------------------------|--------------------------|--------------------------|
| Background             | `#ffffff`               | `#1e293b`               |
| Navbar/Sidebar         | `#f8fafc`               | `#0f172a`               |
| Primary Button         | `#3b82f6` (blue)        | `#14b8a6` (teal)        |
| Secondary Button       | `#e5e7eb` (gray)        | `#334155` (gray)        |
| Button Hover           | `#2563eb` (blue)        | `#2dd4bf` (teal)        |
| Input Fields           | `#f1f5f9` (light gray)  | `#1e293b` (charcoal)    |
| Text Primary           | `#333333` (dark gray)   | `#f8fafc` (light gray)  |
| Text Secondary         | `#666666` (medium gray) | `#94a3b8` (muted gray)  |
| Links                  | `#2563eb` (blue)        | `#38bdf8` (sky blue)    |
| Divider/Border         | `#e5e7eb` (light gray)  | `#334155` (dark gray)   |
| Success (e.g., alerts) | `#10b981` (green)       | `#22c55e` (green)       |
| Warning (e.g., alerts) | `#f59e0b` (yellow)      | `#fbbf24` (yellow)      |
| Error (e.g., alerts)   | `#ef4444` (red)         | `#f87171` (red)         |

---

## **3. Code Editor Color Palettes**

Provide multiple code editor themes that users can select in settings:

### **Light Code Themes**
1. **Solarized Light**
   - Background: `#fdf6e3`
   - Text: `#657b83`
   - Keywords: `#268bd2` (blue)
   - Strings: `#2aa198` (teal)
   - Comments: `#93a1a1` (gray)

2. **Monokai Light**
   - Background: `#ffffff`
   - Text: `#272822`
   - Keywords: `#66d9ef` (cyan)
   - Strings: `#e6db74` (yellow)
   - Comments: `#75715e` (gray)

---

### **Dark Code Themes**
1. **Dracula**
   - Background: `#282a36`
   - Text: `#f8f8f2`
   - Keywords: `#ff79c6` (pink)
   - Strings: `#f1fa8c` (yellow)
   - Comments: `#6272a4` (blue-gray)

2. **Solarized Dark**
   - Background: `#002b36`
   - Text: `#839496`
   - Keywords: `#268bd2` (blue)
   - Strings: `#2aa198` (teal)
   - Comments: `#586e75` (gray)

3. **Monokai**
   - Background: `#272822`
   - Text: `#f8f8f2`
   - Keywords: `#f92672` (pink)
   - Strings: `#a6e22e` (green)
   - Comments: `#75715e` (gray)

---

## **4. Theme Implementation Strategy**

### **For Light and Dark Modes**
1. Use Tailwind CSS with `dark` mode enabled:
   ```js
   darkMode: 'class', // Configure Tailwind
   ```
2. Apply `dark:` prefix to styles:
   ```html
   <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
     Content here
   </div>
   ```

### **For Code Editor Themes**
- Use the Monaco Editor’s built-in theme API to define themes programmatically.
- Example for setting a theme in Monaco:
  ```javascript
  monaco.editor.defineTheme('solarized-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'keyword', foreground: '268bd2' },
      { token: 'string', foreground: '2aa198' },
      { token: 'comment', foreground: '586e75' },
    ],
    colors: {
      'editor.background': '#002b36',
    },
  });
  monaco.editor.setTheme('solarized-dark');
  ```

---

## **5. Settings Page Theme Options**
In the settings page, offer the following options:
- **Light Themes**: Default Light, Solarized Light, Monokai Light
- **Dark Themes**: Default Dark, Dracula, Solarized Dark, Monokai

Users can select their preferred theme, which will:
1. Update the global app theme.
2. Persist the preference using `localStorage`.
