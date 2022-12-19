;(function oneClickTwitchMessage() {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = browser.runtime.getURL('build/favorite-chat-messages.js')
  const head = document.getElementsByTagName('head')[0]
  if (!head) return
  head.appendChild(script)

  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.href = browser.runtime.getURL('build/favorite-chat-messages.css')
  head.appendChild(style)
})()
