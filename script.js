function findMinMax(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        throw new Error("Array must be a non-empty array of numbers");  
    }
    let min = arr[0], max = arr[0];
    for(const n of arr){
        if(n < min) min = n;
        if(n > max) max = n;
    }
    return { min, max };
}

function parseNumbers(input){
    return input
    .split(/[ ,]+/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter(n => Number.isFinite(n));
}

function showError(msg){
    const errorEl = document.getElementById("errorMsg");
    if(errorEl) errorEl.textContent = msg || "";
}

function updateResults(min, max){
    const box = document.getElementById("results");
    const minEl = document.getElementById("minValue");
    const maxEl = document.getElementById("maxValue");

    if(box && minEl && maxEl){
        minEl.textContent = String(min);
        maxEl.textContent = String(max);
        box.hidden = false;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("numbersInput");
    const btn = document.getElementById("computeBtn");

    if(!input || !btn) return;

    btn.addEventListener("click", () => {
        try{
            showError("");
            const values = parseNumbers(input.value || "");
            if(values.length === 0){
                showError("Please enter at least one valid number.");
                return;
            }
            const { min, max } = findMinMax(values);
            updateResults(min, max);
        } catch(e) {
            showError(e?.message || "Something went wrong.");
        }
    });
});


//Using Math.min() and Math.Find the max() Methods 

// let Arr = [50, 60, 20, 10, 40];
// let minVal = Math.min(...Arr);
// let maxVal = Math.max(...Arr);
// console.log("Min Elem is:" + minVal);
// console.log("Max Elem is:" + maxVal);


//Iterating through the Array 

// let Arr = [50, 60, 20, 10, 40];
// let minVal = Infinity;
// let maxVal = -Infinity;

// for (let item of Arr) {

// // Find min val
//   if (item < minVal)
//       minVal = item;

// // Find max val
//    if (item > maxVal)
//        maxVal = item;
// console.log("Min elem is:" + minVal);
// console.log("Min elem is:" + maxVal);
// }


//Using a Custom Comparator with Array.sort() Method

// let Arr = [50, 60, 20, 10, 40];
// Arr.sort((a, b) => a - b);

// let minVal = Arr[0]; 
// Arr.sort((a, b) => b - a);

// let maxVal = Arr[0]; 
 
// console.log("Min Elem is:" + minVal);
// console.log("Max Elem is:" + maxVal);