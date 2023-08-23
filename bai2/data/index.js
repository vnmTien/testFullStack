import mongoose from "mongoose";

export const users = 
[
    {"username": "admin", password: "MindX@2022"},
    {"username": "alice", password: "MindX@2022"},
]

export const inventory =
[
   { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
   { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
   { "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
   { "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
]

export const order =
[
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 3, "item" : "pecans", "price" : 20, "quantity" : 3 },
]