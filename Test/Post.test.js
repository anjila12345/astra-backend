var Post = require('../models/Post');
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
describe(' Testing of Contact Schema', () => {
    it(' Testing of Adding Contact', () => {
        const post = {
            'name': 'waiter',
            'description': 'vaccancy forr waiter'

        };

        return Post.create(post)
            .then((post) => {
                expect(post.name).toEqual('waiter');
            });
    });
});
it('to test the update bookingbusiness', async () => {

    return Post.findByIdAndUpdate({_id :Object('5fdb3120aedb1403089b8c22')}, {$set : {name:'waiter',description:'vaccancy forr waiter'}})
  .then((pp)=>{
    expect(pp.name).toEqual('waiter'),
    expect(pp.description).toEqual('vaccancy forr waiter')


})
});
it('Testing of Contact Deletion', async () => {
    const status = await Post.deleteOne({ "_id": "5fdb31007c116037f821699f" });
    expect(status.ok).toBe(1);
});