const express = require('express');

const stripe = require("stripe")(process.env.SECRET_KEY);
const {v4 : uuidv4} = require("uuid");

const router = express.Router();

router.get('/', (req, res, next)=>{
    console.log("Get response from stripe");

    res.json({
        message: 'it works'
    });
});

router.post('/pay', (req, res, next)=>{
    console.log(req.body.token);

    const {token, amount} = req.body;
    const indepotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token
    }).then(customer => {
        stripe.charges.create({
            amount: amount*1,
            currency: "rs",
            customer: customer.id,
           reciept_email : token.email
        } , {indepotencyKey})
    }).then(result => {
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
    });
});

module.exports = router;

