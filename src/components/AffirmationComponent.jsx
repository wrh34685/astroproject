// Shows @ http://localhost:4321/ from: https://community.aws/content/2e0HjEBi7MAY40KTLoOtVEX9Lf8/build-an-affirmation-app
// ---------------------
// My DynamoDB Data Source: yc5v2mj4bg 
//   My Dev DynamoDB items:  https://yc5v2mj4bg.execute-api.us-east-1.amazonaws.com/items
//   My Prod DynamoDB items: https://yc5v2mj4bg.execute-api.us-east-1.amazonaws.com/prod/items
//   Sample DynamoDB Data Source: e51pzppdu1 = https://e51pzppdu1.execute-api.us-east-1.amazonaws.com/items
// ---------------------

// const data = await fetch('https://yc5v2mj4bg.execute-api.us-east-1.amazonaws.com/items').then((response) =>
// Sample DynamoDB Data Source: 
    // const data = await fetch('https://e51pzppdu1.execute-api.us-east-1.amazonaws.com/items').then((response) =>
        const data = await fetch('https://yc5v2mj4bg.execute-api.us-east-1.amazonaws.com/prod/items').then((response) =>
        response.json()
);

const Affirmation = () => {
    return <h3>{JSON.stringify(data[0].Text)}</h3>;
};
export default Affirmation;