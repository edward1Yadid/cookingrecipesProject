# cookingrecipesProject

Welcome to the Cooking Recipes Project! This project is a web-based platform that allows users to explore and find various cooking recipes using a third-party API.

## Overview

The Cooking Recipes Project is a web application that provides a platform for users to discover a wide range of cooking recipes. Utilizing a third-party API, users can search for recipes based on categories, and making it easier to find their desired recipes.

## Features

1. Recipe Categories:
Browse recipes by different categories, such as breakfast, lunch, dinner, desserts, etc.

2. Ingredient Search:
Search for recipes based on available ingredients.

3. Cuisine Exploration:
Explore recipes based on different cuisines from around the world.

4. Detailed Recipe Information:
View detailed information for each recipe, including ingredients, steps, and nutritional information.

## Prerequisites

1. Web browser
2. Stable internet connection

## Installation
To use the Cooking Recipes Project, follow these steps:

1. Clone the Repository:

git clone https://edward1yadid.github.io/cookingrecipesProject/

## Usage
1. Explore Recipes:
Open the index.html file in your web browser.
Browse recipes by categories, ingredients, or cuisines.

2. Search for Recipes:
Use the search functionality to find recipes based on specific criteria.

3. View Recipe Details:

Click on a recipe to view detailed information, including ingredients and steps to prepare the dish.

## API Integration
This project utilizes TheMealDB API to fetch cooking recipes. TheMealDB offers a free API without requiring an API key. Here's how you can integrate TheMealDB API into the project:

1. Use TheMealDB API:
TheMealDB provides a free-to-use API that offers various endpoints to fetch meal categories, recipes, and details. You can make HTTP requests to these endpoints directly from your JavaScript code.

2. Example API Request:
Below is an example of how you can make an API request to fetch a list of meal categories using JavaScript's Fetch API.

const fetchMealCategories = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    console.log(data); // Process the data accordingly
  } catch (error) {
    console.error('Error fetching meal categories:', error);
  }
};

fetchMealCategories();

This request fetches a list of meal categories from TheMealDB API.

3. Explore API Endpoints:
Refer to TheMealDB API documentation for more details on available endpoints and how to structure requests to get specific recipe data. Documentation:  TheMealDB API Documentation - https://www.themealdb.com/api.php


