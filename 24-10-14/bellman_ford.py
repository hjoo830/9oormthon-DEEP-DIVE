def bellman_ford(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbor, weight in graph[node].items():
                if distances[node] + weight < distances[neighbor]:
                    distances[neighbor] = distances[node] + weight

    for node in graph:
        for neighbor, weight in graph[node].items():
            if distances[node] + weight < distances[neighbor]:
                return "Negative cycle detected!"
    
    return distances

graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 7},
    'C': {'A': 4, 'B': 2, 'D': 3},
    'D': {'B': 7, 'C': 3}
}
start_node = 'A'
result = bellman_ford(graph, start_node)
print('======bellman-ford======')
if isinstance(result, dict):
    for node in result:
      print(f"{start_node}에서 {node}까지 최단 거리: {result[node]}")
else:
    print(result)
