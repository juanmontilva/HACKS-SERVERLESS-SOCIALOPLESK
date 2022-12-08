const output = require("../../extra/output/output");
let middy = require("middy");
let {jsonBodyParser} = require("middy/middlewares");


const Lista = ["foo","bar","baz","qux","fred"];

const handler = async (e) => {
    let {httpMethod: method,body: q} = e;
    if (method == "GET") {
        if(Lista.find(element => element == q.payload))
        return output(q);
    }else{
        return output({"payload":"not found"})
    }
};

exports.handler = middy(handler)
                    .use(jsonBodyParser());