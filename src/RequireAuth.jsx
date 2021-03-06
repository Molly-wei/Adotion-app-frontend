import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RequireAuth(props) {
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/session`, {
        withCredentials: true,
      })
      .then((res) => {
        setNextPage(props.children);
      })
      .catch((error) => {
        setNextPage(<Navigate to="/login"></Navigate>);
      });
  });

  return nextPage;
}
