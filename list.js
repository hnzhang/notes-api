import handler from "./libs/handler-lib";
import dynamodb from "./libs/dynamodb-lib";

export const main  = handler(async(event, context) => {
    const params = {
        TableName: process.env.tableName,
        //KeyConditionExpress defines the condition for the query
        KeyConditionExpression: "userId= :userId",
        ExpressionAttributeValues: {
            ":userId": "123",
        },
    };

    const result = await dynamodb.query(params);

    return result.Items;
});