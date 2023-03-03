export function showAlertDialog(message) {
  const dialog = document.getElementById('customAlert');
  dialog.querySelector('p').textContent = message;
  const customAlertBtn = dialog.querySelector('#customAlertBtn');
  customAlertBtn.addEventListener('click', () => {
    dialog.close();
  });
}

export function showConfirmDialog(message) {
  const dialog = document.getElementById('customConfirm');
  dialog.querySelector('p').textContent = message;
  const customConfirmCancel = dialog.querySelector('#customConfirmCancel');
  const customConfirmOK = dialog.querySelector('#customConfirmOK');
  const output = document.getElementById("output");
  customConfirmCancel.addEventListener('click', () => {
    output.textContent = "Confirm result: false" ;
    dialog.close();
  });
  customConfirmOK.addEventListener('click', () => {
    output.textContent = "Confirm result: true";
    dialog.close();
  });
}

export function showPromptDialog(message) {
  const dialog = document.getElementById('customPrompt');
  dialog.querySelector('p').textContent = message;
  const customPromptCancel = dialog.querySelector('#customPromptCancel');
  const customPromptOK = dialog.querySelector('#customPromptOK');
  const output = document.getElementById("output");

  customPromptOK.addEventListener('click', () => {
    const input = DOMPurify.sanitize(document.querySelector("#inputText").value);
    if (input === null || input == "") {
      output.textContent = "User didn't enter anything";
    } else {
      output.innerHTML = `Prompt result: ${input}`;
    }
    dialog.close();
  });

  customPromptCancel.addEventListener('click', () => {
    output.textContent = "User didn't enter anything" ;
    dialog.close();
  });
  
}