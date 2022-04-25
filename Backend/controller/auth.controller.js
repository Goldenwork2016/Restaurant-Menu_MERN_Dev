const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports = {
                  //  @descrtio   
                 //  @route   POST /api/v1/register
                //  @access  Public
                /* 
                    Process Flow [createUser]: 
                    *  check user table with the email submitted if user exists on the database
                    *  if user email wasn't supplied then create a new user
                    *  if new user is been created a stripe account should be created along side it.
                */
                createUser:async(req, res) => {
                    // Function to encrypt user password
                    let  encryptedPassword = await bcrypt.hash(req.body.password, 10);     
                    User.findOne({email:req.body.email}, async (err, user) => {
                      if (user) {
                        return res.status(501).json({
                            message: `User with this email ${req?.body.email} already exist`,
                            status:  user.statusCode
                        })
                      } else {
                            let user = new User({
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                phone_number: req.body.phone_number,
                                email: req.body.email,
                                date_of_birth: req.body.date_of_birth, 
                                social_insurance_number:  req.body.social_insurance_number,
                                address : req.body.address,
                                country: req.body.country,
                                province: req.body.province,
                                city: req.body.city,
                                postal_code: req.body.postal_code,
                                bank_holder_name: req.body.bank_holder_name,
                                bank_acount_number: req.body.bank_acount_number,
                                routing_number: req.body.routing_number,
                                password: encryptedPassword,
                                user_identity_card_front: req.body.user_identity_card_front,
                                user_identity_card_back: req.body.user_identity_card_back,
                                created_dt:Date.now(),
                                // soft delete case
                                visible: req.body.visible,
                            });
                            await user.save(function (err,user) {
                                if (err) {
                                    return res.status(501).json({
                                      message: err.message,
                                      status: err.statusCode
                                    })
                                } else { 
                                    // Create an associated custom stripe account with the newly created user
                                   stripe.accounts.create({
                                        country: user?.country,
                                        type: 'custom',
                                        capabilities: {
                                          card_payments: {requested: true},
                                          transfers: {requested: true},
                                        },
                                      }).then((data) => {
                                                      user.user_stripe_account_id = data['id'].trim();
                                                      user.save(function (err,result) {
                                                              if (err) {
                                                              return  JSON.stringify({
                                                                  message: 'Unable update user details with stripe id'
                                                                });
                                                              } else {
                                                              return  JSON.stringify({
                                                                      user:  _.pick(result, 
                                                                        ['_id',
                                                                         'first_name',
                                                                         'last_name',
                                                                         'email',
                                                                         'user_stripe_account_id'
                                                                        ]),
                                                                      message: 'User info updated'
                                                                  });
                                                              }
                                                      })
                                      });
                                }
                            })  
                      }
                    })                          
            },
};