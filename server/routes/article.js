const express = require("express");
const articleRouter = express.Router();
const ArticleModel = require("../models/article");

articleRouter.route("/")
    .get((req, res) => {
        ArticleModel.find({ userId: req.user._id }, (err, foundArticles) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(foundArticles);
        });
    })
    .post((req, res) => {
        let newArticle = new ArticleModel(req.body);
        newArticle.userId = req.user._id;
        newArticle.save((err, savedArticle) => {
            if(err) return res.status(500).send(err);
            res.status(201).send(savedArticle); 
        });
    })

articleRouter.route("/:id")
    .delete((req, res) => {
        let {id} = req.params
        ArticleModel.findByIdAndRemove(id, (err, removedArticle) => {
            if (err) {
                console.error(err)
            } else {
                res.send(removedArticle)
            }
        })
    })

module.exports = articleRouter;