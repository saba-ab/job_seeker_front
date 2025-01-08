import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import dayjs from 'dayjs';
import { CategoryNames } from 'constants/categories';
import { Categories } from 'enums/categories';

export function Job({ job }: { job: any }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{job.title}</TableCell>
      <TableCell>{job.company}</TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="outline">{job.location || 'N/A'}</Badge>
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Go to Vacancy
        </a>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {CategoryNames[job.category_id as Categories]}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {dayjs(job.posted_at).format('MMMM D, YYYY')}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {dayjs(job.valid_until).format('MMMM D, YYYY')}
      </TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form method="POST" action={`/api/jobs/delete/${job.id}`}>
                <button type="submit" className="text-red-600">
                  Delete
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
