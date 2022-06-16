import Banner from '../../components/Banner'
import Housing from '../../components/Housing'

/**
 * Homme page
 * @returns {React.ReactElement} JSX.Element - home page with banner and housing
 */
function Home() {
  return (
    <>
      <section className="banner">
        <Banner />
      </section>

      <section className="listingHousing">
        <Housing />
      </section>
    </>
  )
}

export default Home
