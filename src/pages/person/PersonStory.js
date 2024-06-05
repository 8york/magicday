import useFetch from "../../hook/useFetch";

export default function PersonStory() {
  const { data, isPending, error } = useFetch(
    "https://api.adviceslip.com/advice"
  );

  const advice = data?.slip?.advice;

  console.log(advice);
  return (
    <div className="cats">
      <h2>today's advice from a human</h2>
      {isPending && <p>Loading...</p>}{" "}
      {/* Display a loading message while fetching data */}
      {error && <p>Error: {error.message}</p>}{" "}
      {/* Display an error message if an error occurs */}
      {advice && <p>{advice}</p>} {/* Render the fetched data */}
    </div>
  );
}
