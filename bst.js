let root;

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

        
function findMax(node) {
    if (node == null)
        return Number.MIN_VALUE;
    while (node.right != null) {
        node = node.right;
    }
    return node.data;
    
}

function findMin(node)
    {
        //code
        if (node == null) {
            return -1;
        }
        while(node.left != null){
            node = node.left;
        }
        return node.data;

root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);;
root.right.right = new Node(25);
root.right.left = new Node(17);

console.log("Maximum element is " + findMax(root));
console.log("Minimum element is " + findMin(root));
    
     
