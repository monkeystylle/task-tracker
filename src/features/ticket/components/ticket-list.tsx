import { Placeholder } from '@/components/placeholder';
import { Separator } from '@/components/ui/separator';
import { getTickets } from '../queries/get-tickets';
import { ParsedSearchParams } from '../search-params';
import { TicketItem } from './ticket-item';
import { TicketPagination } from './ticket-pagination';
import { TicketSearchInput } from './ticket-search-input';
import { TicketSortSelect } from './ticket-sort-select';

type TicketListProps = {
  userId?: string;
  searchParams: ParsedSearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const { list: tickets, metadata: ticketMetadata } = await getTickets(
    userId,
    searchParams
  );

  return (
    <div className="container mx-auto flex-1 flex flex-col gap-y-4 animate-fade-from-top">
      {/* Create a flex container for the search/sort and pagination */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left side: Search and Sort */}
        <div className="flex gap-x-2">
          <TicketSearchInput placeholder="Search tickets ..." />
          <TicketSortSelect
            options={[
              {
                sortKey: 'createdAt',
                sortValue: 'desc',
                label: 'Newest',
              },
              {
                sortKey: 'createdAt',
                sortValue: 'asc',
                label: 'Oldest',
              },
              {
                sortKey: 'bounty',
                sortValue: 'desc',
                label: 'Bounty',
              },
            ]}
          />
        </div>
        
        {/* Right side: Pagination */}
        <div>
          <TicketPagination paginatedTicketMetadata={ticketMetadata} />
        </div>
      </div>
      
      <Separator />

      {tickets.length ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tickets.map(ticket => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        <Placeholder label="No tickets found" />
      )}
    </div>
  );
};

export { TicketList };