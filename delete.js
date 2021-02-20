import handler from "./libs/handler-lib";
import dynamodb from "./libs/dynamodb-lib";

export const main = handler( async (event, context) =>
{
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: "123",
            noteId: event.pathParameters.id,
        },
    };

    await dynamodb.delete(params);

    return {status: true};
});