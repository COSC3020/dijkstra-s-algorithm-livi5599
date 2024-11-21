//Need a place to store visited & unvisited nodes
//Need a place to store tentative node distances (infinity), until they are updated with the shortest distance
//Possibly need a place to store previous nodes when node distance is updated (used when wanting to construct shortest path from 2 nodes)

//Beginning:
//1. Mark all nodes as unvisited
//2. Assign to all nodes, except starting node, a tentative distance value (infinity)

//Recursive steps:
//3. For current node calculate the distance to all unvisited neighbors
//3.1. Update shortest distance if new distance is shorter than old distance
//4. Mark current node as visited
//5. Choose new current node from unvisited list w/ minimal distance

function dijkstra(graph, sourceNode) {
    var visited = [];
    var unvisited = [];
    var shortestDist = [];
    for (row = 0; row < graph.length; row++) {
        unvisited.push(row);
        shortestDist[row] = Infinity;
    }
    console.log("unvisited after for loop = ", unvisited);
    //console.log("shortestDist after for loop = ", shortestDist);
    shortestDist[sourceNode] = 0;
    //console.log("updated shortestDist = ", shortestDist);

    //while (unvisited.length != 0) {
        for (column = 0; column < graph.length; column++) {
            console.log(graph[sourceNode][column]);
            //console.log("graph[sourceNode] = ", graph[sourceNode]);
            //console.log("unvisited = ", unvisited);
            //console.log("unvisited[column] = ", unvisited[column]);
            //console.log(unvisited.includes(unvisited[column]));
            //console.log(shortestDist[column]);
            //console.log("unvisited[column] = ", unvisited[column]);
            if (unvisited.includes(unvisited[column]) && shortestDist[column] > 0) {
                if (graph[sourceNode][column] + shortestDist[sourceNode] < shortestDist[column]) {
                    shortestDist[column] = graph[sourceNode][column] + shortestDist[sourceNode];
                    console.log("shortestDist = ", shortestDist);
                }
            }
        }
    //}


    
    
    
    
    
    
    
    
    
    
    
//     const dist = [];
//     const distance = [];

//     for (i = 0; i < graph.length; i++) {
//         dist[i] = Infinity;
//     }

//  dist[sourceNode] = 0;

//     while (visited.length < graph.length) {
//         var min = Infinity;
//         var nextNode = undefined;
//         for (node = 0; node < graph.length; node++) {
//             if (graph[sourceNode][node] > 0) {
//                 nextNode = node;
//             }
//             if (dist[nextNode] > dist[sourceNode] + graph[sourceNode][nextNode]) {
//                 dist[nextNode] = dist[sourceNode] + graph[sourceNode][nextNode];
//                 dist.push(dist[nextNode]);
//             }
//         }
        
//     }
    
//     return [];
}

var matrix = [
    [0, 2, 8, 0, 0, 0],
    [2, 0, 5, 6, 0, 0],
    [8, 5, 0, 3, 2, 0],
    [0, 6, 3, 0, 1, 9],
    [0, 0, 2, 1, 0, 3],
    [0, 0, 0, 9, 3, 0]
];

console.log(dijkstra(matrix, 0));
