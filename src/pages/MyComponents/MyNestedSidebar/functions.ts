import { TocDataRaw } from './dummyData';

export type TocData = TocDataRaw & { children: TocData[] };
export type Toc = TocData[];

const bindParent = (nestedToc: Toc, node: TocData, currentIndex: number, plainToc: Toc): Toc => {
  const previousIndex = currentIndex - 1;
  if (previousIndex < 0) return [node, ...nestedToc];

  const previousNode = plainToc[previousIndex];
  if (previousNode.depth < node.depth) {
    previousNode.children.unshift(node);
    return nestedToc;
  }
  return bindParent(nestedToc, node, previousIndex, plainToc);
};

export const makeNestedToc = (plainToc: TocDataRaw[]) =>
  plainToc.map((tocData) => ({ ...tocData, children: [] } as TocData)).reduceRight(bindParent, [] as Toc);
