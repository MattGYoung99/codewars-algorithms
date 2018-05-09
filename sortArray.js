// sort array using no higher order function

const sortArr = (arr) => {
    let sorted = false;
        while (!sorted) {
        sorted = true;
            for (var x in arr) {
                    if (arr[x-1] > arr[x]) {
                        let lessNum = arr[x-1];
                        arr[x] = lessNum;
                        arr[x-1] = arr[x];
                        sorted = false;
                    }
            }
        }
    return arr;
  }