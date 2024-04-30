import { requests } from "./api/request";
import { Banner } from "./presentation/component/banner";
import { Nav } from "./presentation/component/nav";
import { Row } from "./presentation/component/row";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
