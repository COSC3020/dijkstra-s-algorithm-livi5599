function dijkstra(graph, sourceNode) {
    //var visited = [];
    var unvisited = []; //used to store nodes that haven't been visited yet
    var shortestDist = []; //used to store the shortest distances from sourceNode to all other nodes
    for (row = 0; row < graph.length; row++) { //Iterates over each node in the graph
        unvisited.push(row); //Adds each node to unvisited since no nodes have been visited/processed yet
        shortestDist[row] = Infinity; //Sets the shortest distance of each node to infinity, assuming nodes are initially unreachable
    }
    console.log("unvisited after for loop = ", unvisited);
    console.log("shortestDist after for loop = ", shortestDist);
    shortestDist[sourceNode] = 0; //Sets the distance from sourceNode to itself as 0, since no travel is needed 
    console.log("updated shortestDist = ", shortestDist);

    while (unvisited.length != 0) { //Runs until all nodes have been processed (unvisited is empty)
        let currentNode = null; //Represents the node to be processed next. Set to null since no node is selected yet
        let minDist = Infinity; //Represents the shortest known distance from sourceNode among unvisited nodes. Set to infinity since it is assumed that neighbors are unreachable
        for (column = 0; column < unvisited.length; column++) { //Iterates over all unvisited nodes
            if (shortestDist[unvisited[column]] < minDist) { //If the shortest distance to the current unvisited node is less than the shortest known distance from sourceNode to its neighbor...
                minDist = shortestDist[unvisited[column]]; //Set the shortest known distance to the distance of this unvisited node
                currentNode = unvisited[column]; //Set currentNode to this unvisited node
                // if (currentNode == null) {
                //     currentNode = -1;
                // }
                console.log("minDist after if = ", minDist);
                console.log("currentNode after if = ", currentNode);
            }
            
            // if (unvisited.includes(unvisited[column]) && shortestDist[column] > 0) {
            //     if (graph[sourceNode][column] + shortestDist[sourceNode] < shortestDist[column]) {
            //         shortestDist[column] = graph[sourceNode][column] + shortestDist[sourceNode];
            //         console.log("shortestDist = ", shortestDist);
            //     }
            // }
        }

        unvisited = unvisited.filter(node => node !== currentNode); //Remove the node being processed next (currentNode) from unvisited, as it will now be processed

        for (column = 0; column < unvisited.length; column++) { //Iterates over each unvisited neighbor of sourceNode
            console.log("currentNode = ", currentNode);
            console.log("graph[currentNode] = ", graph[currentNode]);

            if (graph[currentNode][unvisited[column]] !== undefined && shortestDist[currentNode] + graph[currentNode][unvisited[column]] < shortestDist[unvisited[column]]) { //If the distance from the node being processed and its neighbor + the shortest distance from sourceNode to its neighbor is less than the shortest known distance from sourceNode...
                shortestDist[unvisited[column]] = shortestDist[currentNode] + graph[currentNode][unvisited[column]]; //Set the shortest distance from sourceNode to its neighbor to the sum of the distance from the node being processed to the neighbor node and the shortest distance from sourceNode to its neighbor
                console.log("shortestDist = ", shortestDist);
            }
        }
    }
    return shortestDist; //Return the shortest distances from sourceNode to all other nodes
