import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JobsTable } from './jobs-table';
import { fetchPaginatedJobs } from 'app/api/jobs';

export default async function JobsPage(props: {
  searchParams: Promise<{ q?: string; page?: string; limit?: string }>;
}) {
  // Await the searchParams object
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const page = parseInt(searchParams.page ?? '1', 10);
  const jobsPerPage = 10;

  const jobResults = await fetchPaginatedJobs(page, jobsPerPage, search);
  const { jobs, total } = jobResults;

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Job
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <JobsTable
          jobs={jobs}
          totalJobs={total}
          page={page}
          jobsPerPage={jobsPerPage}
        />
      </TabsContent>
    </Tabs>
  );
}
