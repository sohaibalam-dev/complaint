import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
// import useFetch from "@/hooks/use-fetch";

// import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getComplaints } from "@/api/apiJobs";

const ComplaintList = () => {
  const [complaint_id, setComplaint_id] = useState("");

  const { isLoaded } = useUser();

  const {
    loading: loadingComplaints,
    data: complaint,
    fn: fnComplaints,
  } = useFetch(getComplaints, {
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) {
      fnComplaints();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) fnComplaints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
  };

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="">
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Complaints
      </h1>
      <form
        onSubmit={handleSearch}
        className="h-14 flex flex-row w-full gap-2 items-center mb-3"
      >
        <Input
          type="text"
          placeholder="Search Jobs by Title.."
          name="search-query"
          className="h-full flex-1  px-4 text-md"
        />
        <Button type="submit" className="h-full sm:w-28" variant="blue">
          Search
        </Button>
      </form>
      <div className="flex flex-col sm:flex-row gap-2">
        <Select
          value={complaint_id}
          onValueChange={(value) => setComplaint_id(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Complaint" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {companlaint?.map(({ name, id }) => {
                return (
                  <SelectItem key={name} value={id}>
                    {name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="sm:w-1/2"
          variant="destructive"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>

      {loadingComplaints && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}

      {loadingComplaints === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complaint?.length ? (
            complaint.map((job) => {
              return (
                <JobCard
                  key={complaint.id}
                  companlaint={complaint}
                  savedInit={complaint?.saved?.length > 0}
                />
              );
            })
          ) : (
            <div>No Complaint Found 😢</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComplaintList;
