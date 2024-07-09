var Filter = require('bad-words'),
filter = new Filter();

const Leaderboard = require("../models/leaderboard");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.leaderboardData = asyncHandler(async (req, res, next) => {
    //query database for the data
    const leaderboard =  await Leaderboard.find({})
    .sort({ score: 1 })
    .exec();
    res.send({leaderboard: leaderboard });
})

exports.leaderboardPost = [
    body("name", "Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
    body("score", "Score must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

    asyncHandler(async (req, res, next) => {
        let cleanName = filter.clean(req.body.name);
        const record = new Leaderboard({
            name: cleanName,
            score: req.body.score,
        });
        await record.save();
        res.redirect("/");
    })
];