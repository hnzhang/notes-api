import dynamodb from "./libs/dynamodb-lib";
import handler from "./libs/handler-lib";

export const main = handler( async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        //'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            userId: '123',
            noteId: event.pathParameters.id,
        },
    };

    const result = await dynamodb.get(params);


    if(Object.keys(result).length == 0){
        throw new Error("Item not found.");
    }

    //Return the retieved item
    return result;
});