import React from 'react';
import ReactDOM from 'react-dom/client';
import './mystyle.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (  <div className="recipe-container">
    <h1 className="title">Pav Bhaji Recipe</h1>
    <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
            <li>2 tablespoons butter</li>
            <li>1 large onion, finely chopped</li>
            <li>2 medium tomatoes, finely chopped</li>
            <li>1 cup boiled and mashed potatoes</li>
            <li>1/2 cup boiled peas</li>
            <li>1/2 cup finely chopped capsicum</li>
            <li>2 teaspoons pav bhaji masala</li>
            <li>Salt to taste</li>
            <li>8 pav buns</li>
            <li>Fresh coriander leaves for garnish</li>
            <li>Lemon wedges and chopped onions for serving</li>
        </ul>
    </div>
    <div className="instructions">
        <h2>Instructions</h2>
        <ol>
            <li>Heat butter in a large pan over medium heat.</li>
            <li>Sauté onions until golden brown, then add tomatoes and cook until soft.</li>
            <li>Add capsicum, mashed potatoes, and peas. Mix well.</li>
            <li>Stir in pav bhaji masala and salt. Cook for 5 minutes.</li>
            <li>Use a masher to blend the mixture until smooth.</li>
            <li>Toast the pav buns with butter on a skillet.</li>
            <li>Garnish the bhaji with coriander leaves and serve hot with toasted pav, lemon wedges, and chopped onions.</li>
        </ol>
    </div>
</div>)
root.render(page);

