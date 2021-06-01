var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect(`mongodb+srv://Lucile08:MongoDB0802@clusteractomobile.samoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    options,
    function(err){
        console.log(err);
    }
)

module.exports = mongoose;