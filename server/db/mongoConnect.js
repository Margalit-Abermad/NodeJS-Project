const mongoose=require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/Store',
  {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
);
const connection=mongoose.connection;
connection.on('error',console.error.bind(console,'connection error:'))
connection.once('open',()=>{
  console.log('Connection to DB was succesful');
});

exports.default=connection;