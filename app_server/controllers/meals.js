const fs = require('fs');
const foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways - Meals', foods});
};

module.exports = {
    meals
}