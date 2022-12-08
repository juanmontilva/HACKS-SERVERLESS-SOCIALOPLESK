const output = require("../../extra/output/output");


const handler = async(e) =>{
    if(e.httpMethod == "GET"){
        return output({"content":"GET"})
    }
};

module.exports = {handler};