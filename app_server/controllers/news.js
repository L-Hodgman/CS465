const fs = require('fs');
const latest = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/travel_tips.json', 'utf8'));
const article = JSON.parse(fs.readFileSync('./data/news_article.json', 'utf8'));

const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways - News', latest, tips, article});
};

module.exports = {
    news
}