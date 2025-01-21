import { closest } from 'fastest-levenshtein';

export const getActivePath = (
  path: string, // Current path to match
  paths: string[], // Array of valid paths
  ignorePaths?: string[] // Optional array of paths to include in matching but not in result
) => {
  // Combine paths and ignorePaths arrays for matching
  const closestPath = closest(path, paths.concat(ignorePaths || []));
  // Find the index of the matched path in the original paths array
  const index = paths.indexOf(closestPath);

  return {
    activeIndex: index, // Index of the matched path
    activePath: closestPath, // The closest matching path
  };
};
