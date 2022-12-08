const output = require("../../extra/output/output");

const handler = async (event) => {
    if(event.httpMethod == "GET"){
        return output ({"content":"delete"})
    }else{
        return output({})
    }
};


module.exports = {handler};