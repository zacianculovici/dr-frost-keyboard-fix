(() => {
  const field = document.querySelector('#expression-answer');
  const mq = field && window.jQuery?.data(field, 'mathField');
  const input = field?.querySelector('[tabindex="0"]');

  if (!field || !mq || !input) {
    console.error('Dr Frost keyboard fix: MathQuill answer field not found.');
    return;
  }

  if (input.dataset.drFrostKeyboardFix === 'active') {
    input.focus();
    mq.focus();
    return;
  }

  input.dataset.drFrostKeyboardFix = 'active';
  document.querySelector('#virtual-keyboard')?.style.setProperty('display', 'none', 'important');

  const clickKeyboardButton = (position) => {
    const button = document.querySelector(
      `#keyboard-button-section-lessmain > span:nth-child(${position}) button`
    );

    if (!button) {
      console.error(`Dr Frost keyboard fix: virtual keyboard button ${position} not found.`);
      return;
    }

    button.click();
    mq.focus();
  };

  input.addEventListener('keydown', (event) => {
    if (event.altKey && event.shiftKey && (event.key === '6' || event.code === 'Digit6')) {
      event.preventDefault();
      event.stopPropagation();
      clickKeyboardButton(5);
      return;
    }

    if (event.key === '^') {
      event.preventDefault();
      event.stopPropagation();
      clickKeyboardButton(8);
      return;
    }

    if (event.key === 'Backspace') {
      event.preventDefault();
      mq.keystroke('Backspace');
      return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      mq.keystroke(event.key.replace('Arrow', '').toLowerCase());
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      field.closest('form')?.requestSubmit();
      return;
    }

    if (
      event.key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      mq.write(event.key);
    }
  });

  input.focus();
  mq.focus();
})();
