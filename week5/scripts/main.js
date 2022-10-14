const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', function() {

   if(input.value.length === 0)
   {
    alert("Input value into field");
   }
   else{
    
    let myItem = input.value;
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const listText = document.createElement('span')
        
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "❌";

    list.appendChild(listItem);
    
    input.value = '';
        
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });
    }

    input.focus()

  });