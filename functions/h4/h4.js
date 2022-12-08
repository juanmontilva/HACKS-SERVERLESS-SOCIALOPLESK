const output = require("../../extra/output/output");

const handler = async (event) => {
    if(event.httpMethod == "DELETE"){
        return output({"content":"delete"})
    }
};

module.exports = {handler};