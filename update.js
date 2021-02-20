import handler from "./libs/handler-lib";
import dynamodb from "./libs/dynamodb-lib";

export const main = handler( async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: "123",
            noteId: event.pathParameters.id,
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":content" : data.content || null,
            ":attachment": data.attachment || null,
        },
        // to specify if and how to return the item's attributes.
        // where ALL_NEW returns all attributes of the item after the updates;
        ReturnValues: "ALL_NEW",
    };

    await dynamodb.update(params);
    return {status: true};
});