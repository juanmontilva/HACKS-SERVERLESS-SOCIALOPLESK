const output = require("../../extra/output/output");

const handler = async (event) => {
    if(event.httpMethod == "POST"){
        return output({"content":"post"})
    }
};

module.exports = {handler};