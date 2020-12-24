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
            'title': 'staff2',
            'description': 'vaccancy forr waiter'

        };

        return Post.create(post)
            .then((post) => {
                expect(post.title).toEqual('staff2');
            });
    });
});
it('to test the update bookingbusiness', async () => {

    return Post.findByIdAndUpdate({_id :Object('5fe45b60d12db93dd4d218d8')}, {$set : {user_id:'5fe45b60d12db93dd4d218d8',title:'chefmanager',description:'vaccancy forr chef'}})

});
it('Testing of Contact Deletion', async () => {
    const status = await Post.deleteOne({ "_id": "5fe4575bc0525234242b2376" });
    expect(status.ok).toBe(1);
});