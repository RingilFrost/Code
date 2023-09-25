  
  function agregar(valor){
    document.getElementById('pantalla').value += valor
  }

  function borrar(){
    document.getElementById('pantalla').value = ''
  }

  function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla) // La función Eval evalúa la expresión de cadena y devuelve su valor. Por ejemplo, Eval("1 + 1") devuelve 2
    document.getElementById('pantalla'). value = resultado
}