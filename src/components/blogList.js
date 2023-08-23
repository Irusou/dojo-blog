import { Link } from "react-router-dom";
export default function BlogList(props) {
	const { blogs, title } = props;

	return (
		<>
			<h2>{title}</h2>
			<div className="blog-list">
				{blogs.map((blog) => (
					<div className="blog-preview" key={blog.id}>
						<Link to={`/blogs/${blog.id}`}>
							<h2>{blog.title}</h2>
							<p>{blog.author}</p>
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
