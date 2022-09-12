const productsModel=require('../models/productsModel');

exports.getAllProducts = () => {
  return new Promise((resolve,reject) => 
  {
    productsModel.find({},function(err,data)
    {
      if(err)
      {
        reject(err);
      }
      else
      {
        resolve(data)
      }
    })
  });
};


exports.getProductByID = (id) => {
  return new Promise((resolve,reject) => {
    productsModel.findById(id,function(err,data)
    {
      if(err)
      {
        reject(err);
      }
      else
      {
        resolve(data)
      }
    })
  });
};

exports.createProduct = (obj) => {
  return new Promise((resolve,reject) => {
      let product=new productsModel(
        {
          _id:obj._id,
          name:obj.name,
          price:obj.price,
          img:obj.img
        });
        product.save(function(err)
        {
          if(err)
        {
          reject(err);
        }
        else
        {
          resolve("created")
        }
        })
  });
};


exports.updateProduct = (id, obj) => {
  return new Promise((resolve,reject) => {
    productsModel.findByIdAndUpdate(id,
      {
        _id:obj._id,
        name:obj.name,
        price:obj.price,
        img:obj.img
      },function(err)
      {
        if(err)
        {
          reject(err);
        }
        else
        {
          resolve("updated")
        }
      })
  });
};

exports.deleteProduct = (id) => {
  return new Promise((resolve) => {
    productsModel.findByIdAndDelete(id,function(err)
    {
      if(err)
      {
        reject(err);
      }
      else
      {
        // resolve(data)
        resolve("deleted")
      }
    })
  });
};

