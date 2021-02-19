import * as uuid from "uuid";
import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TableName,
        Item: {
            userId: "123", // the id of the author
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createAt: Date.now(),
        },
    };

    try {
        await dynamodb.put(params).promise();

        return {
            statusCode: 200,
            body:JSON.stringify(params.Item),
        };
    }catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({error: e.message}),
        };
    }
}