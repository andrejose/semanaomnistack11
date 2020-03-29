// Importa um pacote para criar strings aleatórias
const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}