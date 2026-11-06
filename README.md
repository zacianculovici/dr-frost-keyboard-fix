# dr-frost-keyboard-fix

JavaScript injection for typing algebra answers with the iPad Safari keyboard on Dr Frost Maths.

## Use

1. Open a Dr Frost Maths algebra question.
2. Open Safari's developer console or JavaScript bookmarklet tool.
3. Paste and run `dr-frost-keyboard-fix.js`.
4. Tap the answer field and type normally.

The script keeps MathQuill formatting, hides the site's virtual keyboard, uses `^` for general superscript, and uses **Option/Alt + Shift + 6** for square root.

The injection is temporary and must be run again after reloading the page.
