exports.getFeed = async (req, res) => {
  var feed = [
    { title: "Title 1", body: "Body 1" },
    { title: "Title 2", body: "Body 2" },
    { title: "Title 3", body: "Body 3" },
  ];
  setTimeout(function() {
    res.json(feed); 
  }, 500);
};