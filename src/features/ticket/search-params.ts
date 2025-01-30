import { createSearchParamsCache, parseAsString } from "nuqs/server";

//This is a single parser for the search parameter.
//If the parameter is missing, it defaults to an empty string ("").
export const searchParser = parseAsString.withDefault("").withOptions({
  shallow: false,
  clearOnDefault: true,
});

//This is an object containing multiple parsers.
//It handles two parameters: sortKey and sortValue.
//Each key in the object (sortKey and sortValue) has its own parser.
export const sortParser = {
  sortKey: parseAsString.withDefault("createdAt"),
  sortValue: parseAsString.withDefault("desc"),
};

export const sortOptions = {
  shallow: false,
  clearOnDefault: true,
};

//this combines all parser into single utility
//It allows you to parse all the search parameters at once.
//It caches the parsed results for efficiency
export const searchParamsCache = createSearchParamsCache({
  search: searchParser,
  ...sortParser,
});

export type ParsedSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;

// shallow: true (default)
// Only updates URL, no server rerender

// shallow: false
// Updates URL AND triggers server rerender

// clearOnDefault: false
// URL: /page?search=

// clearOnDefault: true
// URL: /page  (parameter removed when empty)


//A parser is a utility that defines:
//How to convert URL string values to typed values
//How to handle default values