var AWS = require("aws-sdk");

AWS.config.loadFromPath('./config.json');

var docClient = new AWS.DynamoDB.DocumentClient();
var tableName = "MemberProfileTrait";
var oldTraitId = "customer_info";
var newTraitId = "connect_info";
var newCategoryName = "Connect User Information";


var queryByTraitIdParams = {
    TableName : "MemberProfileTrait",
    IndexName : 'traitId-index',
    KeyConditionExpression: "#traitId = :traitId",
    ExpressionAttributeNames:{
        "#traitId": "traitId"
    },
    ExpressionAttributeValues: {
        ":traitId": oldTraitId
    }
};

docClient.query(queryByTraitIdParams, function(err, data) {
    if (err) {
        console.error("Unable to queryByTraitId. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded by Trait Id.");
        data.Items.forEach(function(item) {

            var deleteItemParams = {
                TableName:tableName,
                Key:{
                    "userId": item.userId,
                    "traitId": oldTraitId
                }
            };
            
            console.log("Attempting a conditional delete...");
            docClient.delete(deleteItemParams, function(err, data) {
                if (err) {
                    console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));

                    var createItemParams = {
                        TableName:tableName,
                        Item:{
                            "categoryName": newCategoryName,
                            "createdAt": item.createdAt,
                            "createdBy": item.createdBy,
                            "traitId": newTraitId,
                            "traits": item.traits.replace(oldTraitId, newTraitId),
                            "updatedAt": item.updatedAt,
                            "updatedBy": item.updatedAt,
                            "userId": item.userId
                        }
                    };
        
                    console.log("Adding a new item...");
                    docClient.put(createItemParams, function(err, data) {
                        if (err) {
                            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                        } else {
                            console.log("Added item:", JSON.stringify(data, null, 2));
                        }
                    });

                }
            });
        });
    }
});