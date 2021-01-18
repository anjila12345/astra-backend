// var User = require('../models/agent');
// const mongoose = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/astra';
// beforeAll(async() => {
//     await mongoose.connect(url, {
//         useNewUrlParser: true,
//         useCreateIndex: true
//     });
// });
// afterAll(async() => {
//     await mongoose.connection.close();
// });
// describe(' Testing of User Schema', () => {
//     it(' Testing of Adding User', () => {
//         const user = {
//             'firstname': 'Nischal',
//             'lastname':'Tripathi',
//             'location':'Nepal',
//             'phonenumber':'987456321',
//             'username':'staff5',
//             'email': 'nischal@gmail.com',
//             'password': 'sam00sau35'
//         };

//         return User.create(user)
//             .then((user) => {
//                 expect(user.email).toEqual('nischal@gmail.com');
//             });
//     });
// });

//     it('to test the update bookingbusiness', async () => {

//         return User.findByIdAndUpdate({_id :Object('5fe459690406010f3c00cc2f')}, {$set : {user_id:'5fe459690406010f3c00cc2f',firstname:'nirjal',lastname:'Tripathi', email:'nischal@gmail.com',
//     password:'sam00sau35',username:'yolo8'}})
    
//     });

// it('Testing of User Deletion', async() => {
//     const status = await User.deleteOne({ "_id": "5fe45a2c8b30170a18daed37" });
//     expect(status.ok).toBe(1);
    
// });

