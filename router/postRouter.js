const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('../models/Post');

const postRouter = express.Router();

postRouter.use(bodyPaser.json({ limit: '50mb', extended: true }));


postRouter.route('/')
    .get((req, res, next) => {
        Post.find(req.query)
            .populate('user')
            .sort('-createdAt')
            .then((postes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(postes);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post( (req, res, next) => {
        Post.create(req.body)
            .then((post) => {
                console.log('Post created', post);
                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json(post);
            }).catch((err) => next(err));
    })

    .delete((req, res, next) => {
        Post.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

//with postIds________________________________________________________________________________

postRouter.route('/:postId')
    .get((req, res, next) => {
        Post.findById(req.params.postId)
            .populate('comment')
            // .populate('user')
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .put((req, res, next) => {
        Post.findByIdAndUpdate(req.params.postId, {
            $set: req.body
        }, { new: true })
            .then((post) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(post);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req, res, next) => {
        Post.findById(req.params.postId)
            .then((post) => {
                post.remove();
                console.log(post)
            }).catch((err) => next);
    });

module.exports = postRouter;