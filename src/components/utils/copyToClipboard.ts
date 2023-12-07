export function copyToClipboard(value: string, onSuccess?: () => void) {
  if (!window.isSecureContext || !navigator.clipboard) {
    unsecuredCopyToClipboard(value, onSuccess);
    return;
  }
  navigator.clipboard
    .writeText(value)
    .then(onSuccess)
    .catch(error => {
      console.error('Unable to copy to clipboard', error);
    });
}

function unsecuredCopyToClipboard(value: string, onSuccess?: () => void) {
  const textArea = document.createElement('textarea');
  textArea.value = value;
  textArea.style.position = 'fixed';
  textArea.style.top = '0px';
  textArea.style.left = '0px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    onSuccess?.();
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  } finally {
    document.body.removeChild(textArea);
  }
}
