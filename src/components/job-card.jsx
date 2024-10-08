// /* eslint-disable react/prop-types */
// import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
// import { Button } from "./ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Link } from "react-router-dom";
// import useFetch from "@/hooks/use-fetch";
// // import { deleteJob, saveJob } from "@/api/apiJobs";
// import { useUser } from "@clerk/clerk-react";
// import { useEffect, useState } from "react";
// import { BarLoader } from "react-spinners";

// const JobCard = ({
//   complaint,
//   savedInit = false,
//   onComplaintAction = () => {},
//   isMyComplaint = false,
// }) => {
//   const [saved, setSaved] = useState(savedInit);

//   const { user } = useUser();

//   const { loading: loadingDeleteComplaint, fn: fnDeleteComplaint } = useFetch(deleteComplaint, {
//     complaint_id: complaint.id,
//   });

//   const {
//     loading: loadingSavedComplaint,
//     data: savedComplaint,
//     fn: fnSavedComplaint,
//   } = useFetch(saveComplaint);

//   const handleSaveComplaint = async () => {
//     await fnSavedComplaint({
//       user_id: user.id,
//       complaint_id: complaint.id,
//     });
//     onComplaintAction();
//   };

//   const handleDeleteComplaint = async () => {
//     await fnDeleteComplaint();
//     onComplaintAction();
//   };

//   useEffect(() => {
//     if (savedComplaint !== undefined) setSaved(savedComplaint?.length > 0);
//   }, [savedComplaint]);

//   return (
//     <Card className="flex flex-col">
//       {loadingDeleteComplaint && (
//         <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
//       )}
//       <CardHeader className="flex">
//         <CardTitle className="flex justify-between font-bold">
//           {complaint.title}
//           {isMyComplaint && (
//             <Trash2Icon
//               fill="red"
//               size={18}
//               className="text-red-300 cursor-pointer"
//               onClick={handleDeleteComplaint}
//             />
//           )}
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="flex flex-col gap-4 flex-1">
//         <div className="flex justify-between">
//           {/* {complaint.company && <img src={job.company.logo_url} className="h-6" />} */}
//           <div className="flex gap-2 items-center">
//             <MapPinIcon size={15} />
//           </div>
//         </div>
//         <hr />
//         {job.description.substring(0, job.description.indexOf("."))}.
//       </CardContent>
//       <CardFooter className="flex gap-2">
//         <Link to={`/job/${job.id}`} className="flex-1">
//           <Button variant="secondary" className="w-full">
//             More Details
//           </Button>
//         </Link>
//         {!isMyJob && (
//           <Button
//             variant="outline"
//             className="w-15"
//             onClick={handleSaveJob}
//             disabled={loadingSavedJob}
//           >
//             {saved ? (
//               <Heart size={20} fill="red" stroke="red" />
//             ) : (
//               <Heart size={20} />
//             )}
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };

// export default JobCard;