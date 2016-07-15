// has a root
// has left branch
// has right branch

function MyTree(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var tree1 = new MyTree(3, new MyTree(1), new MyTree(5));

function addToTree(newVal, tree) {
  //left will always have a lower val than root and right
  //root will always have a lower val than right
  if (newVal < tree.val) {
    //if node is a leaf:
    if (!tree.left) {
      //create a new node:
      tree.left = new MyTree(newVal);
    }
    // else if node is a branch:
    else {
      addToTree(newVal, tree.left);
    }
  }
  //else if newVal is greater or equal to tree.val, check if it's less or greater than right val
  else {
    if (!tree.right) {
      tree.right = new MyTree(newVal);
    }
    else {
      addToTree(newVal, tree.right);
    }
  }
}

addToTree(7, tree1);
console.log('tree1: ', tree1);

//var parentTree = tree1;
// function that finds if a node exists in a sorted tree:
function nodeExists(nodeVal, tree, parent) {
  if (!tree) {
    return false;
  }
  else if (nodeVal < tree.val) {
    // check next node on left side
    //console.log('entered nodeVal < tree.val && tree.val');
    return nodeExists(nodeVal, tree.left, tree);
  }
  else if (nodeVal > tree.val) {
    // check next node on right side
    //console.log('entered nodeVal > tree.val && tree.val ');
    return nodeExists(nodeVal, tree.right, tree);
  }
  else if (nodeVal === tree.val) {
    // current node is the nodeVal
    //console.log('entered nodeVal === tree.val');
    //return true;
    nodeVal.parent = parent;
    return nodeVal;
  }
}

//deleting a node in a sorted tree:
//find node
//if node is the first element of the tree, re-arrange tree
// else if node has a parent element and is not a leaf, get node's parent to point to node's children
// else if node has parent and is a leaf, set node's parent's to undentified
function deleteNode(nodeVal, tree) {
  //find node. If exists, proceed to delete. Otherwise return message
  //var y = (x == 2 ? "yes" : "no");
  if (!nodeExists(nodeVal, tree)) console.log("this node does not exist");
  if (nodeVal === tree.val) {
    // take the left branch node and move it to the top
    var oldTree = tree;
    tree = tree.left;
    //console.log('new tree: ', tree);
    // attach the right branch node to the tree
    addToTree(oldTree.right, tree);
    console.log('new tree: ', tree);
  }


}

deleteNode(3, tree1);
