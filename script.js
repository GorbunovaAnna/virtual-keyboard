const divWrapper = document.createElement('div');
divWrapper.className = "wrapper";
document.body.prepend(divWrapper);

const textareaElement = document.createElement('textarea');
textareaElement.className = "textarea";
divWrapper.prepend(textareaElement);

const keyboardElement = document.createElement('div');
keyboardElement.className ="keyboard";
divWrapper.append(keyboardElement);

const info = document.createElement('p');
info.innerHTML = "Virtual-keyboard created in Windows operating system";
info.className = "info";
keyboardElement.after(info);

const keyCombinationInfo = document.createElement('p');
keyCombinationInfo.innerHTML = "ctrl + alt (left) - switch keyboard language";
keyCombinationInfo.className = "info";
info.after(keyCombinationInfo);

