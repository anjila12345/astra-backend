var Application = require('../models/Applications');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/astra';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
// describe(' Testing of Application Schema', () => {
//     it(' Testing of Adding Application', () => {
//         const post = {
            // 'post_id': '6015230ec61ff25b3c8d6790',
            // 'user_id':'6015220ac61ff25b3c8d6789',
            // 'citizenshipnumber':'000000000000006',
            // 'phone':'9860049993',
            // 'university':'Softwarica',
            // 'studylevel':'bachelor',
            // 'year':'2019/06/20',
            // 'address':'maitidevi2',
            // 'workplace':'cloudfactory',
            // 'descp':'worker',
            // 'start':'2016/06/20',
            // 'end':'2020/01/30'

//         };

//         return Application.create(post)
//             .then((post) => {
//                 expect(post.address).toEqual('maitidevi2');
//             });
//     });
// });
// it('to test the update bookingbusiness', async () => {

//     return Application.findByIdAndUpdate({_id :Object('601529c97944231954fba246')}, {$set : { post_id: '6015230ec61ff25b3c8d6790',
//     user_id:'6015220ac61ff25b3c8d6789',
//     citizenshipnumber:'000000000000006',
//     phone:'9860049993',
//     university:'Softwarica',
//     studylevel:'Master',
//     year:'2019/06/20',
//     address:'maitidevi',
//     workplace:'cloudfactory',
//     descp:'worker',
//     start:'2016/06/20',
//     end:'2020/01/30'}})

// });
// it('Testing of Contact Deletion', async () => {
//     const application = await Application.deleteOne({ "_id": "6015294d47291626f84847a2" });
//     expect(application.ok).toBe(1);
// });