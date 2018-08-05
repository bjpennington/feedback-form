const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT * from "feedback"
                    ORDER BY "date" DESC;`
    pool.query(queryText)
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log('Error on /api/feedback GET:', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let newFeedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(results => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error on /api/feedback POST:', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    let feedbackToDelete = req.params.id;
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackToDelete])
        .then(results => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error on /api/feedback POST:', error);
            res.sendStatus(500);
        });
});

module.exports = router;