import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DepartmentList from "./DepartmentList";
import { Box } from "@mui/material";
// import { Box } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const columns = [
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "body", headerName: "Body", flex: 1 },
  ];
  return (
    <div className="container secondpage">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={posts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
      <DepartmentList />{" "}
    </div>
  );
};

export default SecondPage;
