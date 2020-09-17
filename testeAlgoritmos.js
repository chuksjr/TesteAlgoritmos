function testeAlgoritmos( ){

//Questão 1

array_to_sort = [9,3,2,19,3,4,10,34,-99,99]
console.log("Resposta da Questão 1: "+ sort(array_to_sort));


function sort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  



//Questão 2

console.log("Resposta da Questão 2: " + fatorial(10));

function fatorial(value) {
  if(value < 0) {
    return 'Valor não pode ser negativo';
  } else if ( (value == 0) || (value == 1) ) {

    return 1;
  } else {

    var fac = 1;
    for(x = value; x > 1 ; x--) {
      fac = fac * x;
    }
    return fac;
  } 
}


//Questão 3
fibonnacci();
function fibonnacci(){
  var fibo = 1, aux = 0;
  console.log("Resposta da Questão 3:")
  console.log(aux);
  console.log(fibo);


  for(var i = 0; i < 8; i++){
      fibo = fibo + aux;
      aux = fibo - aux;
      console.log(fibo)
  }
}

//Questão 5
var objeto1 = {x1:1, y1:1, x2:2, y2:2}
var objeto2 = {x1:10, y1:10, x2:11, y2:11}
console.log("Resposta da questão 5: " + colisao(objeto1, objeto2));

function colisao(obj1, obj2) {

  if(obj1.x1 === obj2.x1 || obj1.x2 === obj2.x2 
    || obj1.y1 === obj2.y1 || obj1.y2 === obj2.y2) {
    return true;
  } else {
    return false;
  }

}


}