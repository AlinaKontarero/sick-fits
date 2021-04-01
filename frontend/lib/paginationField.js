import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells Apollo we'll care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // Read the items number on the page from the cache:
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items:
      const items = existing.slice(skip, skip + first).filter((item) => item);
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // If no any items, go to the network to fetch them
        return false;
      }
      // If there are items, return thwm without fetching the network:
      if (items.length) {
        return items;
      }
      return false; // Fallback to network
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // Runs when apollo client comes back from the network with our product:
      const merged = existing ? existing.slice(0) : [];

      // eslint-disable-next-line no-plusplus
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
