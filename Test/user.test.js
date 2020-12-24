var User = require('../models/User');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/astra';
beforeAll(async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async() => {
    await mongoose.connection.close();
});
describe(' Testing of User Schema', () => {
    it(' Testing of Adding User', () => {
        const user = {
            'firstname': 'Nischal',
            'lastname':'Tripathi',
            'location':'Nepal',
            'phonenumber':'987456321',
            'username':'hero',
            'email': 'nischal@gmail.com',
            'password': 'sam00sau35'
        };

        return User.create(user)
            .then((user) => {
                expect(user.email).toEqual('nischal@gmail.com');
            });
    });
});

    it('to test the update bookingbusiness', async () => {

        return User.findByIdAndUpdate({_id :Object('5fdb28ec90071517246f16a6')}, {$set : {user_id:'5fdb28ec90071517246f16a6',firstname:'Nischal ',lastname:'Tripathi ', email:'nischal@gmail.com ',
    password:'sam00sau35 ',username:'nischal '}})
      .then((pp)=>{
        expect(pp.firstname).toEqual('Nischal '),
        expect(pp.lastname).toEqual('Tripathi '),
        expect(pp.email).toEqual('nischal@gmail.com '),
        expect(pp.password).toEqual('sam00sau35 '),
        expect(pp.username).toEqual('nischal ')
        

    })
    });

it('Testing of User Deletion', async() => {
    const status = await User.deleteOne({ "_id": "5fdb3206b583f00ba869fd75" });
    expect(status.ok).toBe(1);
    
});

