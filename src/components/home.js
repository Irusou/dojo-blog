import useFetch from "../useFetch";
import BlogList from "./blogList";

const Home = () => {
	const url = "http://localhost:8000/blogs";
	const { data: blogs, loading, error } = useFetch(url);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{loading && <div>loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs!" />}
		</div>
	);
};

export default Home;
