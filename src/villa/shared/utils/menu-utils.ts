export function setTypeAndLevel(node: any, level: number = 0): any {

  if (!node) return node;

  node.level = level;

  node.type =
    level === 0 ? 'menu' :
    level === 1 ? 'category' :
    'tent';

  if (node.children && node.children.length) {
    node.children = node.children.map((child: any) =>
      setTypeAndLevel(child, level + 1)
    );
  }

  return node;
}