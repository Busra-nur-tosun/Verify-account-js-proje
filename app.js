
const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) // bir inputun belirli bir saniyede 9 da kadar girildikten sonra  diğer inputa geçmesini sağlar
    {
      codes[idx].value = ''//bir inputa birden fazla değer girmemi engeller
      setTimeout(() => codes[idx + 1].focus(), 10)
    } else if (e.key === 'Backspace') //backspace tuşuna bastıkça belirli saniyede bir önceki inputa  geçer  
    {
      setTimeout(() => codes[idx - 1].focus(), 10)
    }
  })
})