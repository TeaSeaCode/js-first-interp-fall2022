class Evaluator{
    readvarname(node){
        return node.name;
    }

    readvalue(node){
        return node.value;
    }
    storevar(node, environment){
        const name = this.readvarname(node.id);
        const value = this.readvalue(node.init);
        environment.push = ({name, value});
    }
}
module.exports=Evaluator;