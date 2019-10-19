# Maze-generator-and-Path-Finding-Algorithm
Generates a maze using recursive backtracking algorithm and finding the best path using A* algorithm

The basic idea of this program is to visualize both the recursive backtraking algorithm and the respective path finding algorithms
using p5.js and html
(Note: In the final path finding output, the yellow path is the final path, the green highlighted cells are the cells remaining from the open set and the red highlighted ones are the cells remaining from the closed set.




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

1.Create a search graph G, consisting solely of the start node, no. Put no on a list called OPEN.

2.Create a list called CLOSED that is initially empty.

3.If OPEN is empty, exit with failure.

4.Select the first node on OPEN, remove it from OPEN, and put it on CLOSED. Called this node n.

5.If n is a goal node, exit successfully with the solution obtained by tracing a path along the pointers from n to no in G. (The pointers  define a search tree and are established in Step 7.)

6.Expand node n, generating the set M, of its successors that are not already ancestors of n in G. Install these members of M as      successors of n in G.

7.Establish a pointer to n from each of those members of M that were not already in G (i.e., not already on either OPEN or CLOSED). Add    these members of M to OPEN. For each member, m, of M that was already on OPEN or CLOSED, redirect its pointer to n if the best path to m found so far is through n. For each member of M already on CLOSED, redirect the pointers of each of its descendants in G so that they point backward along the best paths found so far to these descendants.

8.Reorder the list OPEN in order of increasting f values. (Ties among minimal f values are resolved in favor of the deepest node in the search tree.)

9.Go to Step 3.
