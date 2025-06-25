# Restaurant Application

## Overview
This is a Node.js-based restaurant application that provides a RESTful API for managing restaurant data. It uses Express as the server framework and Mongoose for MongoDB object modeling.

## Project Structure

```
restaurant-app/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Restaurant.js
│   ├── routes/
│   │   └── restaurant.routes.js
│   └── controllers/
│       └── restaurant.controller.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd restaurant-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/restaurant
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The server will run on `http://localhost:4000`.

## API Endpoints

# Customer API Endpoints

## 1. Sign Up Customer

**Path:**  
POST `http://localhost:4000/api/costumer/signup`

**Request Body:**
```json
{
    "CostumerName": "John Doe",
    "Costumerlocation": "123 Main St",
    "CostumerphoneNumber": "555-1234"
}
```

**Response:**
```json
{
    "message": "Customer signed up successfully",
    "costumer": {
        "_id": "customer_id",
        "CostumerName": "John Doe",
        "Costumerlocation": "123 Main St",
        "CostumerphoneNumber": "555-1234",
        "__v": 0
    }
}
```

---

## 2. Login Customer

**Path:**  
POST `http://localhost:4000/api/costumer/login`

**Request Body:**
```json
{
    "CostumerName": "John Doe",
    "CostumerphoneNumber": "555-1234"
}
```

**Response:**
```json
{
    "message": "Login successful",
    "costumer": {
        "_id": "customer_id",
        "CostumerName": "John Doe",
        "Costumerlocation": "123 Main St",
        "CostumerphoneNumber": "555-1234",
        "__v": 0
    }
}
```

---

## 3. Get All Customers

**Path:**  
GET `http://localhost:4000/api/costumer`

**Response:**
```json
[
    {
        "_id": "customer_id",
        "CostumerName": "John Doe",
        "Costumerlocation": "123 Main St",
        "CostumerphoneNumber": "555-1234",
        "__v": 0
    },
    ...
]
```

---

## 4. Get Customer By ID

**Path:**  
GET `http://localhost:4000/api/costumer/:id`

**Response:**
```json
{
    "_id": "customer_id",
    "CostumerName": "John Doe",
    "Costumerlocation": "123 Main St",
    "CostumerphoneNumber": "555-1234",
    "__v": 0
}
```

---

## 5. Update Customer By ID

**Path:**  
PUT `http://localhost:4000/api/costumer/:id`

**Request Body:**
```json
{
    "CostumerName": "Jane Doe",
    "Costumerlocation": "456 Elm St",
    "CostumerphoneNumber": "555-5678"
}
```

**Response:**
```json
{
    "message": "Customer updated successfully",
    "customer": {
        "_id": "customer_id",
        "CostumerName": "Jane Doe",
        "Costumerlocation": "456 Elm St",
        "CostumerphoneNumber": "555-5678",
        "__v": 0
    }
}
```

---

## 6. Delete Customer By ID

**Path:**  
DELETE `http://localhost:4000/api/costumer/:id`

**Response:**
```json
{
    "message": "Customer deleted successfully"
}
```

# Delivery API Endpoints

## 1. Create Delivery

**Path:**  
POST `http://localhost:4000/api/delivery`

**Request Body:**
```json
{
    "orderId": "order_id",
    "deliveryAddress": "789 Oak St",
    "deliveryStatus": "pending"
}
```

**Response:**
```json
{
    "message": "Delivery created successfully",
    "delivery": {
        "_id": "delivery_id",
        "orderId": "order_id",
        "deliveryAddress": "789 Oak St",
        "deliveryStatus": "pending",
        "__v": 0
    }
}
```

---

## 2. Get All Deliveries

**Path:**  
GET `http://localhost:4000/api/delivery`

**Response:**
```json
[
    {
        "_id": "delivery_id",
        "orderId": "order_id",
        "deliveryAddress": "789 Oak St",
        "deliveryStatus": "pending",
        "__v": 0
    },
    ...
]
```

---

## 3. Get Delivery By ID

**Path:**  
GET `http://localhost:4000/api/delivery/:id`

**Response:**
```json
{
    "_id": "delivery_id",
    "orderId": "order_id",
    "deliveryAddress": "789 Oak St",
    "deliveryStatus": "pending",
    "__v": 0
}
```

---

## 4. Update Delivery By ID

**Path:**  
PUT `http://localhost:4000/api/delivery/:id`

**Request Body:**
```json
{
    "deliveryStatus": "delivered"
}
```

**Response:**
```json
{
    "message": "Delivery updated successfully",
    "delivery": {
        "_id": "delivery_id",
        "orderId": "order_id",
        "deliveryAddress": "789 Oak St",
        "deliveryStatus": "delivered",
        "__v": 0
    }
}
```

---

## 5. Delete Delivery By ID

**Path:**  
DELETE `http://localhost:4000/api/delivery/:id`

**Response:**
```json
{
    "message": "Delivery deleted successfully"
}
```

---

# Food API Endpoints

## 1. Create Food Item

**Path:**  
POST `http://localhost:4000/api/food`

**Request Body:**
```json
{
    "foodName": "Pizza",
    "price": 12.99,
    "description": "Delicious cheese pizza"
}
```

**Response:**
```json
{
    "message": "Food item created successfully",
    "food": {
        "_id": "food_id",
        "foodName": "Pizza",
        "price": 12.99,
        "description": "Delicious cheese pizza",
        "__v": 0
    }
}
```

---

## 2. Get All Food Items

**Path:**  
GET `http://localhost:4000/api/food`

**Response:**
```json
[
    {
        "_id": "food_id",
        "foodName": "Pizza",
        "price": 12.99,
        "description": "Delicious cheese pizza",
        "__v": 0
    },
    ...
]
```

---

## 3. Get Food Item By ID

**Path:**  
GET `http://localhost:4000/api/food/:id`

**Response:**
```json
{
    "_id": "food_id",
    "foodName": "Pizza",
    "price": 12.99,
    "description": "Delicious cheese pizza",
    "__v": 0
}
```

---

## 4. Update Food Item By ID

**Path:**  
PUT `http://localhost:4000/api/food/:id`

**Request Body:**
```json
{
    "foodName": "Veggie Pizza",
    "price": 13.99,
    "description": "Pizza with vegetables"
}
```

**Response:**
```json
{
    "message": "Food item updated successfully",
    "food": {
        "_id": "food_id",
        "foodName": "Veggie Pizza",
        "price": 13.99,
        "description": "Pizza with vegetables",
        "__v": 0
    }
}
```

---

## 5. Delete Food Item By ID

**Path:**  
DELETE `http://localhost:4000/api/food/:id`

**Response:**
```json
{
    "message": "Food item deleted successfully"
}
```

---

# Restaurant API Endpoints

## 1. Create Restaurant

**Path:**  
POST `http://localhost:4000/api/restaurant`

**Request Body:**
```json
{
    "restaurantName": "Best Eats",
    "location": "321 Maple Ave",
    "phoneNumber": "555-9876"
}
```

**Response:**
```json
{
    "message": "Restaurant created successfully",
    "restaurant": {
        "_id": "restaurant_id",
        "restaurantName": "Best Eats",
        "location": "321 Maple Ave",
        "phoneNumber": "555-9876",
        "__v": 0
    }
}
```

---

## 2. Get All Restaurants

**Path:**  
GET `http://localhost:4000/api/restaurant`

**Response:**
```json
[
    {
        "_id": "restaurant_id",
        "restaurantName": "Best Eats",
        "location": "321 Maple Ave",
        "phoneNumber": "555-9876",
        "__v": 0
    },
    ...
]
```

---

## 3. Get Restaurant By ID

**Path:**  
GET `http://localhost:4000/api/restaurant/:id`

**Response:**
```json
{
    "_id": "restaurant_id",
    "restaurantName": "Best Eats",
    "location": "321 Maple Ave",
    "phoneNumber": "555-9876",
    "__v": 0
}
```

---

## 4. Update Restaurant By ID

**Path:**  
PUT `http://localhost:4000/api/restaurant/:id`

**Request Body:**
```json
{
    "restaurantName": "Super Eats",
    "location": "654 Pine St",
    "phoneNumber": "555-4321"
}
```

**Response:**
```json
{
    "message": "Restaurant updated successfully",
    "restaurant": {
        "_id": "restaurant_id",
        "restaurantName": "Super Eats",
        "location": "654 Pine St",
        "phoneNumber": "555-4321",
        "__v": 0
    }
}
```

---

## 5. Delete Restaurant By ID

**Path:**  
DELETE `http://localhost:4000/api/restaurant/:id`

**Response:**
```json
{
    "message": "Restaurant deleted successfully"
}
```