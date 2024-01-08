var express = require("express");
const db = require("../database");
const Validation = require("../utils/validation");

var router = express.Router();

// GET /:id - get all entry
router.get("/", async function (req, res) {
    // fetch data from postgres
    const result = await db.query("SELECT * FROM entries;");

    // send the data as response
    res.send(result.rows);
});

// GET /:id - get single entry
router.get("/:id", async function (req, res) {
    // fetch data from postgres
    const result = await db.query(`SELECT * FROM entries WHERE id=$1;`,[req.params.id]);

    // send the data as response
    res.send(result.rows[0]);
});

// POST - Insert single entry
router.post("/", async function (req, res) {
    // read data from client
    const { title, amount, type, category } = req.body;


    if (Validation(title,amount,type,category)) {
        return res.status(400).send({
            errorType: "VALIDATION_ERROR",
        });
    }

    // save data to database
    const result = await db.query(
        `INSERT INTO entries (title, amount, category, type) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [title, amount, category, type]
    );

    // send the new entry as response
    res.send(result.rows[0]);
});

// PATCH /:id - update single entry
router.patch("/:id", async function (req, res) {

    const { title, amount, category } = req.body;

    const data = await db.query(`SELECT * FROM entries WHERE id=$1;`,[req.params.id]);

    if(title && title.length != 0){
        data.rows[0].title = title;
    }
    if (amount && amount > 0){
        data.rows[0].amount = amount;
    }
    if (category && category.length != 0){
        data.rows[0].category = category;
    }

    if (Validation(data.rows[0].title,data.rows[0].amount,data.rows[0].type,data.rows[0].category)) {
        return res.status(400).send({
            errorType: "VALIDATION_ERROR",
        });
    }

    // save data to database
    const result = await db.query(
        `UPDATE entries SET title=$1, amount=$2, type=$3, category=$4 WHERE id = $5 RETURNING *;`,
        [data.rows[0].title,data.rows[0].amount,data.rows[0].type,data.rows[0].category, req.params.id]
    );

    res.send(result.rows[0]);
});

// DELETE /:id - delete single entry
router.delete("/:id",async function(req,res){
    const result = await db.query(`DELETE FROM entries WHERE id=$1;`,[req.params.id]);
    res.send("Deleted successfully!");
});

module.exports = router;


// CREATE TABLE "public"."entries" (
//     "id" integer DEFAULT nextval('entries_id_seq') NOT NULL,
//     "title" character varying(255) NOT NULL,
//     "amount" double precision NOT NULL,
//     "category" character varying(255) NOT NULL,
//     "type" character varying(255) NOT NULL,
//     "created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
//     CONSTRAINT "entries_pkey" PRIMARY KEY ("id")
// ) WITH (oids = false);

// INSERT INTO "entries" ("id", "title", "amount", "category", "type", "created_at") VALUES
// (1,	'salary',	50000,	'salary',	'income',	'2024-01-07 06:00:10.983009'),
// (2,	'electricity bill',	1570,	'utility bill',	'expense',	'2024-01-07 06:05:23.744528'),
// (5,	'web project',	15000,	'freelancing',	'income',	'2024-01-07 06:36:02.747886'),
// (3,	'gas bill',	1567,	'utility bill',	'expense',	'2024-01-07 06:05:43.047924'),
// (17,	'shop rent',	10000,	'assets',	'income',	'2024-01-07 09:55:25.417842'),
// (16,	'house rent',	15000,	'rent',	'expense',	'2024-01-07 09:54:46.186497');