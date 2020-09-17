//Questão 1
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
  
    return auxArray;
  }
  
  array_to_sort = [9,3,2,19,3,4,10,34,-99,99]
  sort(array_to_sort);
  console.log(array_to_sort);




//Questão 2
function factorial() {
    var fac = Math.floor(Math.random() * 65536);
    for(var i = 1; i < n; i++){
        fac = fac * i;
    }
    return fac;
}
console.log(fac);



//Questão 3
function fibonacci(){
    var cont = 0;
    var aux = 1, fibo = 0, temp;  
    
    while (cont >= 0){
        temp = aux;
        aux = aux + fibo;
        fibo = temp;
        cont++;
    }
    console.log(fibo);
}




