//
//                  Project Configuration
//

module.exports = function(app){
    // Create Safe Reference to the Environment Variable
    var environment = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : null ;
    
    // =======================================================
    //  Local
    // =======================================================
    if(environment == 'local' || !environment){
        return {
            host: 'http://localhost:5000'
        }
    
    // =======================================================
    //  Development
    // =======================================================
    } else if (environment == 'development' || environment == 'dev') {
        return {
            host: 'http://localhost:5000'
        }
      
    // =======================================================
    //  Production 
    // =======================================================
    } else if (environment == 'production') {
        return {
            host: 'http://localhost:5000'
        }
    }
    
}