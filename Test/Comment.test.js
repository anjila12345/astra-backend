// var Comment = require('../models/comment');
// const mongoose = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/astra';
// beforeAll(async () => {
//     await mongoose.connect(url, {
//         useNewUrlParser: true,
//         useCreateIndex: true
//     });
// });
// afterAll(async () => {
//     await mongoose.connection.close();
// });
// describe(' Testing of Comment Schema', () => {
//     it(' Testing of Adding Comment', () => {
//         const post = {
//             'user_id':'600d627eeae00a06ac130ae1',
//             'comment': 'staff2',
//             'post_id': '600d624beae00a06ac130ae0'

//         };

//         return Comment.create(post)
//             .then((post) => {
//                 expect(post.comment).toEqual('staff2');
//             });
//     });
// });
// it('to test the update bookingbusiness', async () => {

//     return Comment.findByIdAndUpdate({_id :Object('600d63363388cb2134f30f55')}, {$set : {user_id:'600d627eeae00a06ac130ae1',comment:'chefmanager',post_id:'600d624beae00a06ac130ae0'}})

// });
// it('Testing of Contact Deletion', async () => {
//     const comment = await Comment.deleteOne({ "_id": "600d6312cded3612d050e638" });
//     expect(comment.ok).toBe(1);
// });