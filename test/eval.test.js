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

test('variable value reads hello', ()=>{
    const evaluator = new Evaluator();
    expect(evaluator.readvalue(body[0].declarations[0].init)).toBe('hello'); 
})
test('variable stored in environment', ()=>{
    const evaluator = new Evaluator();
    let environment = [];
    evaluator.storevar(body[0].declarations[0],environment);
    console.log(environment[0]);
    expect(environment[0]).toStrictEqual({"name": "a", "value": "hello"})
})
// test('if node is type is var declaror, get var', ()=>{
//     const evaluator = new Evaluator();
//     let environment = [];
//    expect(evaluator.bodyEval(body));
// })