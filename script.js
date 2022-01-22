const input = document.getElementById('input');
const output = document.getElementById('output');
const contain = document.getElementById('contain');
let item_counter = 0;
let groceries = [];

const add = document.getElementById('add').addEventListener("click", (e)=>{
    if(item_counter == 5){
        alert("Reached list limit. CTRL + F5 to refresh")
        return;
    } else {
        item_counter += 1;

        groceries.push(input.value);
        
        let item = document.createElement('p');
        item.append(item_counter + "." + input.value);
        contain.append(item);

        document.body.append(contain);

        item.addEventListener("dblclick", (e)=>{
            let striked = item.innerHTML.strike();
            item.innerHTML = striked;
        })
    }
    
})

