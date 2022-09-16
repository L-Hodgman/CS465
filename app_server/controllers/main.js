const fs = require('fs');
const home = JSON.parse(fs.readFileSync('./data/home.json', 'utf8'));

const index = (req, res) => {
    pageTitle = 'Travlr Getaways - Home';
    res.render('index', {title: pageTitle, home});
};

module.exports = {
    index
}