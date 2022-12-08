const output = require("../../extra/output/output");

const handler = async (event) =>{
    try{
        if(event.httpMethod == "GET"||"POST"||"PUT"||"DELETE"){
            return output(`content:${event.httpMethod}`)
        }
    }catch{
        return output(error.toString())
    }
};


module.exports = {handler};