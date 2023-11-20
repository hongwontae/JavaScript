const {generateText} = require('./util');

test('should good test', ()=>{
    const text = generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
});

