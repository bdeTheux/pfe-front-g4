import OnePost from "../../components/OnePost/OnePost";
const postDetails = ({ postId }) => {
  return <OnePost postId={postId} />;
};

export const getServerSideProps = async (context) => {
  const postId = context.params.id;
  return {
    props: {
      postId,
    },
  };
};

export default postDetails;
