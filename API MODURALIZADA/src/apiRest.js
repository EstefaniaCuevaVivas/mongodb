const app = require("./app")

 require("./dataBase")

 app.listen(app.get("port"),function(){
  console.log(console.log("server listen on port " + app.get("port")))
 })


 