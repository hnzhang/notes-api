import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamodb from "./libs/dynamodb-lib";

export const main = handler(async(event, content) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: "123",
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createAt: Date.now(),
        },
    };

    await dynamodb.put(params);
    return params.item;
});