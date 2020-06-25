
export function sendMessage(data) {
  let message = JSON.stringify(data);
  window.ReactNativeWebView.postMessage(message);
}
