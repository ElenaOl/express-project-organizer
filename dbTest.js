var db = require('./models');

db.project.find({
  where: {id:1},
  include: [db.category]
}).then(function(project){
  console.log(project.categories);

  project.createCategory({ name: 'node'}).then(function(category){
   console.log(category.get());
  });
});
