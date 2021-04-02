const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: error});
    }
});

// SUBMIT POSTS
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const singlePost = await Post.findById(req.params.postId);
        res.json(singlePost);
    } catch (err) {
        res.json({message: err});
    }
});

//DELETE SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const deletePost = await Post.deleteOne({_id: req.params.postId});
        res.json(deletePost);
    } catch (err) {
        res.json({message: err});
    }
});

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            
            // UPDATE ALL FIELDS
            {$set: req.body}

            // UPDATE ONLY TITLE AND DESCRIPTION
            // {$set: {
            //     title: req.body.title,
            //     description: req.body.description
            // }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err})
        console.log(err);
    }
});


module.exports = router;