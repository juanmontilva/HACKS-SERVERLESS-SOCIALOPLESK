const output = require("../../extra/output/output");

const Lista = ["foo","bar","baz","qux","fred"];

const handler = async (e) => {
    let {httpMethod: method,queryStringParameters: q} = e;

    if (method == "GET") {
        if(Lista.find(element => element == q.payload))
        return output(q);
    }else{
        return output({"payload":"not found"})
    }
};

module.exports = {handler};