const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate a unique ID', () => {
        const id = generateUniqueId();

        // expect(2 + 2).toBe(5); // Example
        expect(id).toHaveLength(8);
    });
});