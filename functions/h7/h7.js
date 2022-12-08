const output = require("../../extra/output/output");

const handler = async (e) => {
    let {httpMethod: method,queryStringParameters: q} = e;
    if (method == "GET") {
        return output(q);
    }else{
        return output({})
    }
};

module.exports = { handler };