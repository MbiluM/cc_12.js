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

// Appending the title and value to the metric card
revenueCard.appendChild(revenueCardTitle); 
revenueCard.appendChild(revenueCardValue); 
