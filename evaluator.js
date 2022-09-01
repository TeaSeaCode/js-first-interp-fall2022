class Evaluator{
    readvarname(node){
        return node.name;
    }

    readvalue(node){
        return node.value;
    }
    storevar(node, environment){
        console.log("store eval", node);
        const name = this.readvarname(node.id);
        const value = this.readvalue(node.init);
        environment.push({name, value});
        console.log(name+" "+value, environment);
    }
    nodeEval(node, environment){
        console.log("node eval", node.type);
        if(node.type == 'VariableDeclaration'){
            console.log("In the if", node);
            this.storevar(node.declarations[0], environment);
        }
        console.log(environment);
    }
    evalNodes(nodes, environment){
        for(const node of nodes){
            this.nodeEval(node, environment); 
        }
    }
}
module.exports=Evaluator;