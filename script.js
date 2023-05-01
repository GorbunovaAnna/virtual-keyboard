const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.prepend(divWrapper);

const textareaElement = document.createElement('textarea');
textareaElement.className = 'textarea';
divWrapper.prepend(textareaElement);

const keyboardElement = document.createElement('div');
keyboardElement.className = 'keyboard';
divWrapper.append(keyboardElement);

const info = document.createElement('p');
info.innerHTML = 'Virtual-keyboard created in Windows operating system';
info.className = 'info';
keyboardElement.after(info);

const keyCombinationInfo = document.createElement('p');
keyCombinationInfo.innerHTML = 'ctrl + alt (left) - switch keyboard language';
keyCombinationInfo.className = 'info';
info.after(keyCombinationInfo);

const keysArray = [
  {
    valueRu: 'ё',
    valueEng: '`',
    keyCode: 'Backquote',
  },
  {
    value: '1',
    specialValue: '!',
    keyCode: 'Digit1',
  },
  {
    value: '2',
    specialValue: '@',
    keyCode: 'Digit2',
  },
  {
    value: '3',
    specialValue: '#',
    keyCode: 'Digit3',
  },
  {
    value: '4',
    specialValue: '$',
    keyCode: 'Digit4',
  },
  {
    value: '5',
    specialValue: '%',
    keyCode: 'Digit5',
  },
  {
    value: '6',
    specialValue: '^',
    keyCode: 'Digit6',
  },
  {
    value: '7',
    specialValue: '&',
    keyCode: 'Digit7',
  },
  {
    value: '8',
    specialValue: '*',
    keyCode: 'Digit8',
  },
  {
    value: '9',
    specialValue: '(',
    keyCode: 'Digit9',
  },
  {
    value: '0',
    specialValue: ')',
    keyCode: 'Digit0',
  },
  {
    value: '-',
    specialValue: '_',
    keyCode: 'Minus',
  },
  {
    value: '=',
    specialValue: '+',
    keyCode: 'Equal',
  },
  {
    value: 'Backspace',
    keyCode: 'Backspace',
  },
  {
    value: 'Tab',
    keyCode: 'Tab',
  },
  {
    valueRu: 'й',
    valueEng: 'q',
    keyCode: 'KeyQ',
  },
  {
    valueRu: 'ц',
    valueEng: 'w',
    keyCode: 'KeyW',
  },
  {
    valueRu: 'у',
    valueEng: 'e',
    keyCode: 'KeyE',
  },
  {
    valueRu: 'к',
    valueEng: 'r',
    keyCode: 'KeyR',
  },
  {
    valueRu: 'е',
    valueEng: 't',
    keyCode: 'KeyT',
  },
  {
    valueRu: 'н',
    valueEng: 'y',
    keyCode: 'KeyY',
  },
  {
    valueRu: 'г',
    valueEng: 'u',
    keyCode: 'KeyU',
  },
  {
    valueRu: 'ш',
    valueEng: 'i',
    keyCode: 'KeyI',
  },
  {
    valueRu: 'щ',
    valueEng: 'o',
    keyCode: 'KeyO',
  },
  {
    valueRu: 'з',
    valueEng: 'p',
    keyCode: 'KeyP',
  },
  {
    valueRu: 'х',
    valueEng: '[',
    keyCode: 'BracketLeft',
  },
  {
    valueRu: 'ъ',
    valueEng: ']',
    keyCode: 'BracketRight',
  },
  {
    valueRu: '\\',
    valueEng: '\\',
    keyCode: 'Backslash',
  },
  {
    value: 'Del',
    keyCode: 'Delete',
  },
  {
    value: 'Caps lock',
    keyCode: 'CapsLock',
  },
  {
    valueRu: 'ф',
    valueEng: 'a',
    keyCode: 'KeyA',
  },
  {
    valueRu: 'ы',
    valueEng: 's',
    keyCode: 'KeyS',
  },
  {
    valueRu: 'в',
    valueEng: 'd',
    keyCode: 'KeyD',
  },
  {
    valueRu: 'а',
    valueEng: 'f',
    keyCode: 'KeyF',
  },
  {
    valueRu: 'п',
    valueEng: 'g',
    keyCode: 'KeyG',
  },
  {
    valueRu: 'р',
    valueEng: 'h',
    keyCode: 'KeyH',
  },
  {
    valueRu: 'о',
    valueEng: 'j',
    keyCode: 'KeyJ',
  },
  {
    valueRu: 'л',
    valueEng: 'k',
    keyCode: 'KeyK',
  },
  {
    valueRu: 'д',
    valueEng: 'l',
    keyCode: 'KeyL',
  },
  {
    valueRu: 'ж',
    valueEng: ';',
    keyCode: 'Semicolon',
  },
  {
    valueRu: 'э',
    valueEng: '\'',
    keyCode: 'Quote',
  },
  {
    value: 'Enter',
    keyCode: 'Enter',
  },
  {
    value: 'Shift',
    keyCode: 'ShiftLeft',
  },
  {
    valueRu: 'я',
    valueEng: 'z',
    keyCode: 'KeyZ',
  },
  {
    valueRu: 'ч',
    valueEng: 'x',
    keyCode: 'KeyX',
  },
  {
    valueRu: 'c',
    valueEng: 'с',
    keyCode: 'KeyC',
  },
  {
    valueRu: 'м',
    valueEng: 'v',
    keyCode: 'KeyV',
  },
  {
    valueRu: 'и',
    valueEng: 'b',
    keyCode: 'KeyB',
  },
  {
    valueRu: 'т',
    valueEng: 'n',
    keyCode: 'KeyN',
  },
  {
    valueRu: 'ь',
    valueEng: 'm',
    keyCode: 'KeyM',
  },
  {
    valueRu: 'б',
    valueEng: ',',
    keyCode: 'Comma',
  },
  {
    valueRu: 'ю',
    valueEng: '.',
    keyCode: 'Period',
  },
  {
    valueRu: '.',
    valueEng: '/',
    keyCode: 'Slash',
  },
  {
    value: '▲',
    keyCode: 'ArrowUp',
  },
  {
    value: 'Shift',
    keyCode: 'ShiftRight',
  },
  {
    value: 'Ctrl',
    keyCode: 'ControlLeft',
  },
  {
    value: 'Win',
    keyCode: 'MetaLeft',
  },
  {
    value: 'Alt',
    keyCode: 'AltLeft',
  },
  {
    value: 'Space',
    keyCode: 'Space',
  },
  {
    value: 'Alt',
    keyCode: 'AltRight',
  },
  {
    value: '◄',
    keyCode: 'ArrowLeft',
  },
  {
    value: '▼',
    keyCode: 'ArrowDown',
  },
  {
    value: '►',
    keyCode: 'ArrowRight',
  },
  {
    value: 'Ctrl',
    keyCode: 'ControlRight',
  },
];

let currentLanguage = 'en';
let currentRegister = 'lowerCase';
let keyElement;

function createKey(key) {
  keyElement = document.createElement('div');
  keyElement.setAttribute('id', key.keyCode);
  if (currentLanguage === 'en') {
    keyElement.innerHTML = key.valueEng || key.value;
  } else if (currentLanguage === 'ru') {
    keyElement.innerHTML = key.valueRu || key.value;
  }

  keyElement.className = 'key';

  if (key.keyCode === 'ShiftRight'
            || key.keyCode === 'ShiftLeft'
            || key.keyCode === 'Enter'
            || key.keyCode === 'CapsLock'
            || key.keyCode === 'Backspace') {
    keyElement.classList.add('big');
  } else if (key.keyCode === 'Space') {
    keyElement.classList.add('super');
  }

  keyboardElement.append(keyElement);
}

function keysToUp(isCapsLock = false) {
  currentRegister = 'upperCase';
  keysArray.forEach((item) => {
    const key = document.getElementById(item.keyCode);

    if (item.specialValue) {
      if (!isCapsLock) {
        key.textContent = item.specialValue;
      }
    } else {
      key.textContent = key.textContent.toUpperCase();
    }
  });
}
function keysToLow() {
  currentRegister = 'lowerCase';
  keysArray.forEach((item) => {
    const key = document.getElementById(item.keyCode);

    if (item.specialValue) {
      key.textContent = item.value;
    } else {
      key.textContent = key.textContent.toLowerCase();
    }
  });
}
function changeLanguage() {
  keysArray.forEach((item) => {
    const key = document.getElementById(item.keyCode);

    if (currentLanguage === 'en' && item.valueEng) {
      key.textContent = item.valueEng;
    } else if (currentLanguage === 'ru' && item.valueRu) {
      key.textContent = item.valueRu;
    }
  });
}

function drawKeys() {
  keysArray.forEach((el) => {
    createKey(el);
  });
}
drawKeys();
textareaElement.focus();

function writeCharacter(e) {
  textareaElement.focus();
  let keyCode = '';
  const { selectionStart } = textareaElement;
  const { selectionEnd } = textareaElement;
  const curText = textareaElement.value;
  if (e.target.className === 'keyboard') {
    return;
  }
  if (e.type === 'click') {
    keyCode = e.target.id;
    const foundEl = document.getElementById(e.target.id);
    foundEl.classList.add('active');
    setTimeout(() => {
      foundEl.classList.remove('active');
    }, 100);
  } else if (e.type === 'keydown') {
    if (e.target.innerText.length > 10) {
      return;
    }
    const foundEl = document.getElementById(e.code);
    foundEl.classList.add('active');
  }

  if (document.getElementById('ControlLeft').classList.contains('active')
    && document.getElementById('AltLeft').classList.contains('active')) {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    changeLanguage();
  }

  switch (keyCode) {
    case 'Enter':
      textareaElement.value = `${curText.substring(0, selectionStart)}\n${curText.substring(selectionEnd)}`;
      break;

    case 'Backspace':
      textareaElement.value = curText.substring(0, selectionEnd - 1)
      + curText.substring(selectionEnd);
      break;

    case 'Space':
      textareaElement.value = `${curText.substring(0, selectionStart)} ${curText.substring(selectionEnd)}`;
      break;

    case 'Tab':
      textareaElement.value = `${curText.substring(0, selectionStart)}\t${curText.substring(selectionEnd)}`;
      break;
    case 'MetaLeft':
    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
      break;

    case 'CapsLock':
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
      } else {
        e.target.classList.add('active');
      }
      if (currentRegister === 'upperCase') {
        keysToLow();
      } else {
        keysToUp(true);
      }
      break;

    case 'ShiftLeft':
    case 'ShiftRight':
      if (currentRegister === 'upperCase') {
        keysToLow();
      } else {
        keysToUp();
      }
      break;

    default:
      textareaElement.value += e.target.innerText;
  }
}

function removeActive(e) {
  const foundEl = document.getElementById(e.code);
  foundEl.classList.remove('active');
}

keyboardElement.addEventListener('click', (e) => writeCharacter(e));
document.addEventListener('keydown', (e) => writeCharacter(e));
document.addEventListener('keyup', (e) => removeActive(e));
