import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdShare } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
   
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden ">
      <div className="flex justify-between bg-base-200 items-center gap-3 p-4 ">
        <div className="flex items-center gap-3 p-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={author.img} alt={author.name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        </div>
        <div>
        <button className="text-gray-500 hover:text-primary flex gap-2">
         <FaRegBookmark size={20} />
         <MdShare  size={25}/>
         </button>
        </div>
      </div>

      <figure>
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full object-cover h-48"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <>
          { details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline">
            Read More
          </Link>
        </>
        <div className="text-primary mt-2 text-sm flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
           {
            Array.from ({length:rating.number}).map((_,i)=>(
              <FaStar key={i} className="text-orange-400"></FaStar>
            ))
           }
            <span className="ml-2 badge badge-warning text-xs">{rating.badge}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegEye    />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
