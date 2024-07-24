import useFetch from "../../hook/useFetch";

export default function CatStory() {
  const { data, isPending, error } = useFetch(
    "https://meowfacts.herokuapp.com/"
  );
  return (
    <div className="cats">
      <h2>purring wisdomzzz</h2>
      {isPending && <p>Loading...</p>}{" "}
      {/* Display a loading message while fetching data */}
      {error && <p>Error: {error.message}</p>}{" "}
      {/* Display an error message if an error occurs */}
      {data && <p>{data.data}</p>} {/* Render the fetched data */}
    </div>
  );
}
