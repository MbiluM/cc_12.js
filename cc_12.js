//Task 1 - Created Revenue Metric Card
let dashboardContainer1 = document.getElementById('dashboard'); 
let dashboardContainer2 = document.querySelector('#dashboard'); 

let revenueCard = document.createElement('div'); 

revenueCard.setAttribute('class', 'metric-card'); // Assigning a class and an ID to the new element
revenueCard.setAttribute('id', 'revenueCard'); 

let revenueCardTitle = document.createElement('h3'); //Creating elements for the title & value

revenueCardTitle.textContent = 'Revenue'; 

let revenueCardValue = document.createElement('p'); 
revenueCardValue.textContent = ' $0'; 

revenueCard.appendChild(revenueCardTitle); //Appending the title and value to the metric card
revenueCard.appendChild(revenueCardValue); 

//Task 2 - Updated Metric Cards via Array Conversion
let metricCards = document.querySelectorAll('metric-card');

// Converting the NodeList to an array
let metricCardsArray = Array.from(metricCards);

// Using forEach to update each card's inner text
metricCardsArray.forEach(card => {
    card.textContent = card.textContent + ' - Updated';
    card.style.backgroundColor = 'lightBlue';
});

//Task 3 - Implemented Dynamic Inventory List
function createProductItem(productName) { // Function to create a new product item
    let listItem = document.createElement('li');
    listItem.text = productName;
    listItem.setAttribute('class', 'product-item');
    listItem.setAttribute('data-product', `productName`); // Example of a custom data attribute
    
    // Add event listener to remove the item when clicked
    listItem.addEventListener('click', removeProductItem);
    
    return listItem;
};

let inventoryList = document.getElementById('inventoryList'); // Create the inventory list element if it doesn't exist
if (!inventoryList) {
    inventoryList = document.createElement('ul');
    inventoryList.id = 'inventoryList';
    document.body.appendChild(inventoryList); // Append to the body or another appropriate container
}

let addButton = document.createElement('button'); //  Add a button to add items
addButton.textContent = 'Add Product';
addButton.addEventListener('click', function() {
    const productName = prompt('Enter product name:');
    if (productName) {
        addProductItem(productName);
    }
});
document.body.appendChild(addButton);
