import {Link} from 'react-router-dom'
function Home() {
    return (
      <>
        <main>
          <h2>Homepage</h2>
        </main>
        <nav>
          <Link to="/service">service</Link>
        </nav>
      </>
    );
}
export default Home