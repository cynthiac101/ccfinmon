// This file will deal with the wishlist table.
const database = require("./database");
const express = require("express");
const { response } = require("express");

var router = express.Router();

/*
router.get("/customer/all", get_all_customers);
*/

router.put("/wishlist/update", update_wishlist_by_id);
router.get("/wishlist/by-cid", get_wishlist_by_child_id);
router.post("/wishlist/create", add_new_wishlist);
router.delete("/wishlist/delete", delete_wishlist_by_id);

/*
function get_all_customers(request, response) {
  database.connection.query(
    "select * from customers", // query in string format
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send(results);
      }
    }
  );
}
*/
function update_wishlist_by_id(request, response) {
  database.connection.query(
    `update wishlist 
    SET type = '${request.body.type}',
    category = '${request.body.category}',
    item_name = '${request.body.item_name}',
    price = '${request.body.price}', 
    goal = '${request.body.goal}'
    where id = ${request.query.id}`, 
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Added successfully!");
      }
    }
  );
}

function get_wishlist_by_child_id(request, response) {
    database.connection.query(
      `select * from wishlist where child_id = ${request.body.child_id}`,
      (error, results) => {
        if (error) {
          console.log(error);
          response.status(500).send("Internal Server Error");
        } else {
          response.status(200).send(results);
        }
      }
    );
  }
  
function add_new_wishlist(request, response) {
  database.connection.query(
    `insert into wishlist (child_id, type, category, item_name, price, goal) 
        values (
        '${request.body.child_id}', 
        '${request.body.type}', 
        '${request.body.category}', 
        '${request.body.item_name}', 
        '${request.body.price}', 
        '${request.body.goal}')`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Added successfully!");
      }
    }
  );
}

function delete_wishlist_by_id(request, response) {
  database.connection.query(
    `delete from wishlist where id = ${request.query.id}`,
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Deleted successfully!");
      }
    }
  );
}

module.exports = {
  router,
};
