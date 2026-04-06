// Error is parent class and ErrorHandler is extended child class of it 
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message) // super is constructor of the parent class
        this.statusCode = statusCode
        
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler;