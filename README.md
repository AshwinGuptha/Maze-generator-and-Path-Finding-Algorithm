# Maze-generator-and-Path-Finding-Algorithm
Generates a maze using recursive backtracking algorithm and finding the best path using A* algorithm

The basic idea of this program is to visualize both the recursive backtraking algorithm and the respective path finding algorithms

Recursive Backtracking Algorithm :
 
 1.Make the initial cell the current cell and mark it as visited
 
 2.While there are unvisited cells
 
      1.If the current cell has any neighbours which have not been visited
            1.Choose randomly one of the unvisited neighbours
            2.Push the current cell to the stack if it has more than one unvisited neighbor
            3.Remove the wall between the current cell and the chosen cell
            4.Make the chosen cell the current cell and mark it as visited
      2.Else if stack is not empty
            1.Pop a cell from the stack while the stack is not empty and the popped cell has no unvisited neighbors
            2.Make it the current cell
            
            
A* algorithm:

function reconstruct_path(cameFrom, current)
    total_path := {current}
    while current in cameFrom.Keys:
        current := cameFrom[current]
        total_path.prepend(current)
    return total_path

// A* finds a path from start to goal.
// h is the heuristic function. h(n) estimates the cost to reach goal from node n.
function A_Star(start, goal, h)
    // The set of discovered nodes that may need to be (re-)expanded.
    // Initially, only the start node is known.
    openSet := {start}

    // For node n, cameFrom[n] is the node immediately preceding it on the cheapest path from start to n currently known.
    cameFrom := an empty map

    // For node n, gScore[n] is the cost of the cheapest path from start to n currently known.
    gScore := map with default value of Infinity
    gScore[start] := 0

    // For node n, fScore[n] := gScore[n] + h(n).
    fScore := map with default value of Infinity
    fScore[start] := h(start)

    while openSet is not empty
        current := the node in openSet having the lowest fScore[] value
        if current = goal
            return reconstruct_path(cameFrom, current)

        openSet.Remove(current)
        for each neighbor of current
            // d(current,neighbor) is the weight of the edge from current to neighbor
            // tentative_gScore is the distance from start to the neighbor through current
            tentative_gScore := gScore[current] + d(current, neighbor)
            if tentative_gScore < gScore[neighbor]
                // This path to neighbor is better than any previous one. Record it!
                cameFrom[neighbor] := current
                gScore[neighbor] := tentative_gScore
                fScore[neighbor] := gScore[neighbor] + h(neighbor)
                if neighbor not in openSet
                    openSet.add(neighbor)

    // Open set is empty but goal was never reached
    return failure
