const Getnodes = require("./../getnodes");
const Evaluator = require("./../evaluator");
let body ;

beforeAll( ()=>{
    var getnodes = new Getnodes();

    const program = getnodes.loadfile('./test/sample.js')
    body = getnodes.parse(program)

    return body;
})

test('nodes parsed', ()=>{
    expect(body.length).toBe(2); 
    console.log(body)

    console.log(body[0].declarations[0])
})

test('variable name is a', ()=>{
    const evaluator = new Evaluator();
    expect(evaluator.readvarname(body[0].declarations[0].id)).toBe('a'); 
})