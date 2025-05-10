# Intuji-QA-Associate-Challenge

##  Setup Steps
1. Clone this repository:
   git clone https://github.com/prasantbhusal/Intuji-QA-Associate-Challenge.git
 2. Navigate to the project directory
 3.  Install dependencies
 4.  npm install
           Open Cypress Test Runner
            npx cypress open

## How to Run Tests
             Open test runner UI
                 npx cypress open
                    Run tests in headless mode:
                    Npx cypress run 
  ##  Tools & Plugins Used

- [Cypress](https://www.cypress.io/) – End-to-End testing framework
- [Faker.js](https://fakerjs.dev/) – Fake data generation
- Page Object Model – Organized test logic
- Cypress Custom Commands – Reusable login/cart commands
- Fixtures – To store test data
- Cypress Screenshots – For failed test steps

---

## ✅ Features Covered

- User Registration with random data
- Session persistence
- Product filtering by category (Women > Dress)
- Add to cart, quantity change, item removal
- Checkout with fake card data
- Logout and re-login verification

---

## 📁 Folder Structure
cypress/
├── e2e/
├── fixtures/
├── screenshots/
├── support/


- Some dynamic selectors or product names may change based on site updates
- Test assumes English UI & consistent structure on automationexercise.com

  
