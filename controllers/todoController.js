var bodyParser = require('body-parser');

var data = [
  { item: 'get milk' },
  { item: 'walk dog' },
  { item: 'code some programs' },
];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get('/todo', function (req, res) {
    res.render('todo', { todos: data });
  });
  app.post('/todo', urlencodedParser, function (req, res) {
    data.push(req.body);
    res.json(data);
  });
  app.delete('/todo', function (req, res) {});
};
