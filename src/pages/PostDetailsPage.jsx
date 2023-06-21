import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import PostDetails from "../components/Posts/PostDetails";
import SuggestedPost from "../components/Posts/SuggestedPost";
import { useSelector } from "react-redux";

const PostDetailsPage = () => {
  const { allPosts } = useSelector((state) => state.posts);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allPosts && allPosts.find((i) => i._id === id);
      setData(data);
    }
  }, [allPosts, allEvents]);

  return (
    <div>
      <Header />
      <PostDetails data={data} />
        {
          !eventData && (
            <>
            {data && <SuggestedPost data={data} />}
            </>
          )
        }
      <Footer />
    </div>
  );
};

export default PostDetailsPage;
