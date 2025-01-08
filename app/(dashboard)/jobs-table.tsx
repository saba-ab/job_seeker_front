'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Job } from './job';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function JobsTable({
  jobs,
  page,
  totalJobs,
  jobsPerPage
}: {
  jobs: any[];
  page: number;
  totalJobs: number;
  jobsPerPage: number;
}) {
  const router = useRouter();

  function prevPage() {
    const newPage = Math.max(1, page - 1); // Ensure page does not go below 1
    router.push(`/?page=${newPage}`);
  }

  function nextPage() {
    const newPage = Math.min(Math.ceil(totalJobs / jobsPerPage), page + 1); // Ensure page does not exceed total pages
    router.push(`/?page=${newPage}`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vacancies</CardTitle>
        <CardDescription>
          Explore Top Vacancies and Track Your Job Applications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Posted At</TableHead>
              <TableHead>Valid Until</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {(page - 1) * jobsPerPage + 1}-
              {Math.min(page * jobsPerPage, totalJobs)}
            </strong>{' '}
            of <strong>{totalJobs}</strong> jobs
          </div>
          <div className="flex gap-2">
            <Button
              onClick={prevPage}
              variant="ghost"
              size="sm"
              disabled={page === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              onClick={nextPage}
              variant="ghost"
              size="sm"
              disabled={page * jobsPerPage >= totalJobs}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
