var path = require("path");

module.exports = function (app) {

app.get("/", function (req, res) {
    res.render(path.join(__dirname, "../views/index"), {
      title: "Article Scraper - Home"
    });
  });

  app.get("/articles", function (req, res) {
    res.render(path.join(__dirname, "../views/articles"), {
      title: "Article Scraper - Articles"
    });
  });

  app.get("/saved", function (req, res) {
    res.render(path.join(__dirname, "../views/saved"), {
      title: "Article Scraper - Saved"
    });
  });


}