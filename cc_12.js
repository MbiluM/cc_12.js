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
let metricCards = document.querySelectorAll('.metric-card');
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
    listItem.setAttribute('data-product', productName); // Example of a custom data attribute
    
    listItem.addEventListener('click', removeProductItem);     // Event listener to remove the item when clicked

    return listItem;
};
const inventoryList = document.getElementById('inventoryList'); // Create the inventory list element if it doesn't exist
if (!inventoryList) {
    inventoryList = document.createElement('ul');
    inventoryList.id = 'inventoryList';
    document.body.appendChild(inventoryList); 
};
function removeProductItem(event) {
    const itemToRemove = event.target;
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.removeChild(itemToRemove);
};
const addButton = document.createElement('button'); // Create the inventory list element if it doesn't exist
addButton.textContent = 'Add Product';
addButton.addEventListener('click', function() {
    const productName = prompt('Enter product name:');
    if (productName) {
        let productItem = createProductItem(productName);
}});
document.body.appendChild(addButton);

// Task 4 - Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById('customerSection'); // Create customer section

function createCustomerCard(customerName) { // Function to create a customer card
    const customerCard = document.createElement('div');
    customerCard.classList.add('customer-card');
    customerCard.textContent = customerName;

    customerCard.addEventListener('click', function(event) {//Adding click event listener to the customer card
    console.log('Customer card clicked');
    event.stopPropagation(); // Stop event bubbling
    
});

    return customerCard;
};

// Add customer cards to the customer section
const customer1 = createCustomerCard('Mbilu');
customerSection.appendChild(customer1);

const customer2 = createCustomerCard('Gumani');
customerSection.appendChild(customer2);

const customer3 = createCustomerCard('Tendai');
customerSection.appendChild(customer3);

// Add click event listener to the customer section
customerSection.addEventListener('click', function() {
    console.log('Customer section clicked');
});