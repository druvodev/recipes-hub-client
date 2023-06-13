# RecipesHub

RecipesHub is a dedicated website that showcases recipes from various chefs around the world, focusing exclusively on one cuisine per website. Each website is dedicated to a specific country's cuisine, allowing users to explore and discover authentic recipes from that particular culinary tradition. This README provides an overview of the RecipesHub project, including its features, installation instructions, and other relevant details.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Live Site](#live-site)
- [Server-Side Repository](#server-side-repository)

## Introduction

RecipesHub is a collection of websites, each dedicated to a specific country's cuisine. These websites provide a platform for talented chefs to showcase their recipes and for food enthusiasts to explore and learn about different culinary traditions. The project aims to promote cultural diversity through the celebration of food and provide a valuable resource for cooking enthusiasts.

## Features

- **Unique Design:** Each RecipesHub website has a unique and visually appealing design that reflects the culture and cuisine of the respective country.
- **User-Friendly Navigation:** The websites feature a navbar with easy access to the home page, blog, and user profile. The navbar dynamically displays the user's profile picture or a login button, depending on the user's authentication status.
- **Homepage:** The homepage includes a visually appealing banner section with engaging content related to the cuisine. It also features a section showcasing talented chefs, with cards displaying their pictures, names, years of experience, number of recipes, likes, and a "View Recipes" button.
- **Chef Recipes Page:** When a user clicks the "View Recipes" button on a chef's card, they are redirected to the Chef Recipes page. This page includes a banner with the chef's picture, name, bio/description, likes, number of recipes, and years of experience. It also displays the selected chef's recipes, including recipe names, ingredients, cooking methods, ratings, and a "Favorite" button. Users can mark recipes as favorites, and a toast message confirms their selection.
- **Loading State:** A spinner is displayed when data is loading, providing a smooth user experience.
- **404 Page:** A custom 404 page is included, featuring a picture to enhance the user experience.
- **Environment Variables:** Sensitive Firebase configuration keys are hidden using environment variables.
- **Active Route Indicator:** The active route is visually indicated, allowing users to easily identify their current location within the website.

## Technologies Used

RecipesHub is built using the following technologies:

- React
- React Router
- Firebase
- Tailwind

## Live Site

Access the live site for RecipesHub at [https://chef-recipes-hub.firebaseapp.com/](https://chef-recipes-hub.firebaseapp.com/).

## Server-Side Repository

Check out the server-side repository for RecipesHub at [https://github.com/prodipdev/recipes-hub-server](https://github.com/prodipdev/recipes-hub-server).

