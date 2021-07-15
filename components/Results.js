import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((item) => (
        <Thumbnail key={item.id} result={item} />
      ))}
    </div>
  );
}

export default Results;
