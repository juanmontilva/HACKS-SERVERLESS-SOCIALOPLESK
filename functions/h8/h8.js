const output = require("../../extra/output/output");
let middy = require("middy");
let {jsonBodyParser} = require("middy/middlewares");

const bodyParemeters = async (e) => {
    let {httpMethod: method,body: q} = e;
    if (method == "GET") {
        return output(q);
    }else{
        return output({})
    }
};

exports.handler = middy(bodyParemeters)
                    .use(jsonBodyParser());