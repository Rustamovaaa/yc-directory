import SearchForm from "../components/search-form";

export default async  function Home({ searchParams }: {
  searchParams:Promise< {query?: string}>
}) {
  const { query } = await searchParams;
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">
      Pitch your startup, <br />
      Connect with entrepreneurs
      </h1>

      <p className="sub-heading !max-w-3xl">
        Submit ideas, vote on pitches, and get noticed in virtual
      </p>
      <SearchForm query={query}/>
    </section>

    <section className="section_container">
       <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
          
        </p>
    </section>

    </>
  );
}
