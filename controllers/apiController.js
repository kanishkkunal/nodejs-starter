const posts = [
  { title: "Post Title 1", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla sed interdum sagittis, ac vulputate dictumst pretium neque vehicula nibh ultricies eget natoque" },
  { title: "Post Title 2", body: "Proin vivamus cubilia gravida malesuada imperdiet quam arcu mus porta vestibulum, dui tempor mattis cras consequat placerat auctor quisque at, taciti penatibus blandit " },
  { title: "Post Title 3", body: "Cubilia primis leo consequat condimentum lacinia hendrerit cum habitant aenean est fames etiam fermentum vulputate, mattis hac eget viverra" },
];

exports.getPosts = async (req, res) => {
  setTimeout(function() {
    res.json(posts); 
  }, 500);
};