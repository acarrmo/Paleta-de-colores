document.getElementById('color').addEventListener('input',getColor)

function getColor()
{
  let col = document.getElementById('color').value

  document.getElementById('container').style.background=col
  document.getElementById('container').innerHTML=col
}
