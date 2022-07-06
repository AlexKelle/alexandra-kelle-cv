function getPrint () {
  console.log(navigator.userAgent)
  if (navigator.userAgent.indexOf('Firefox') !== -1) {
    alert('Please open CV in Google Chrome or Safari for print CV.')
  } else {
    window.print()
  }
}
