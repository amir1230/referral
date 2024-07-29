const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin'); 

const createAdmin = async () => {
  await mongoose.connect('mongodb+srv://soorajmalhi18tl48:lePbblr01wlicUGj@cluster0.nhw1dm0.mongodb.net/referral_system?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const username = 'Pawan kumar'; 
  const email = 'soorajmalhi18tl48@gmail.com'; 
  const password = 'Admin123'; 

  const newAdmin = new Admin({ username, email, password });
  console.log(newAdmin.username, newAdmin.email, newAdmin.password);
  await newAdmin.save();

  console.log('Admin created successfully');
  mongoose.disconnect();
};

createAdmin().catch(err => {
  console.error(err);
  mongoose.disconnect();
});
