function BubleSort(arr) {

    let len = arr.length;

    for (let i = 0 ; i < len ; i++){ 
         for (let j = 0; j < len - i - 1; j++) {
            
            if (arr[j] > arr[j+1]) {
                
                let temp= arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
           
         }
      }
      return arr;
}

let unsortedArry =[34 , 65, 76, 11, 32 , 22, 97]
console.log("bubblesort:" ,BubleSort(unsortedArry.slice()) );