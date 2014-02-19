//=============================================================================
//  Module Dependencies
//=============================================================================

//=============================================================================
//  Main Application Entry (order is important)
//=============================================================================

// Load Configurations
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables
var config = require('./config/config');

console.log(config);
