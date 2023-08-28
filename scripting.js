var container = document.getElementById("array");
let result_container = document.getElementsByClassName('conclusion')[0];

function generating_array(){

    // let container = document.getElementById('array-id'); 
    let arr = [];

    for(let i=0;i<20;i++){
        arr.push(Math.floor(Math.random()*100)+1);
    }

    arr.sort((a, b) => a - b);
    console.log("hello");
    for (let i = 0; i < 20; i++) {
    //   let random_num = Math.floor(Math.random()*100)+1;
    //   let parent = document.createElement('div')
    //   el.classList.add("block-parent");
      let el = document.createElement('div');
      el.style.height = `${arr[i]*4}px`;
      el.style.width = "100px";
      el.style.backgroundColor = "red";
      el.style.margin = "10px";
    //   el.innerHTML = arr[i];
      el.innerHTML = `<div class="value">${arr[i]}</div>`; 
      el.id = "block_" + (i + 1);
      el.classList.add("block");
    //   parent.appendChild(el);
      container.appendChild(el); 

    } 
} 

async function binary_search() {
    console.log("inside binary_search");
    let start = 0;
    let end = 19;
    let flag = false;
    let curr_block = document.querySelectorAll(".block .value"); // Update selector to target .block .value
    console.log(curr_block);//to check the node list
    let input_value = parseInt(document.getElementsByClassName("info")[0].value); // Parse input value to integer
    console.log(input_value);
    result_container.innerHTML = "";

    curr_block.forEach((block) => {
        block.parentElement.style.backgroundColor = "red"; // Update the parent element's background color
    });

    if (!isNaN(input_value)) {
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            curr_block[mid].parentElement.style.backgroundColor = "#48fb47"; // Update the parent element's background color

            let delay = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("resolved");
                }, 3000);
            });

            let delay_received = await delay;

            if (parseInt(curr_block[mid].innerHTML) === input_value) { // Compare with innerHTML of .value element
                flag = true;
                break;
            } else if (parseInt(curr_block[mid].innerHTML) > input_value) { // Compare with innerHTML of .value element
                end = mid - 1;
                curr_block[mid].parentElement.style.backgroundColor = "red"; // Update the parent element's background color
            } else {
                start = mid + 1;
                curr_block[mid].parentElement.style.backgroundColor = "red"; // Update the parent element's background color
            }
        }

        if (flag == true) {
            result_container.innerHTML = "Element Found";
            result_container.style.color = "#00FF00";
        } 
        
        else {
            result_container.innerHTML = "Element Not Found";
            result_container.style.color = "red";
        }
    }

    else {
        result_container.innerHTML = "Nothing Searched , Search again";
        result_container.style.color = "red";
    }
}




// let length_of_array = 10;
generating_array() 
// binary_search() 

let button_action = document.getElementsByClassName("btn-search")[0];
button_action.addEventListener("click" , binary_search);