import {default as Footer} from "./Components/Completed/Footers/Footer"

const FooterPage = () => {
  return (
    <>
      <header style={{height: '10vh', backgroundColor: 'blue'}}></header>
      <main style={{height: '60vh', backgroundColor: 'grey'}}></main>
      <Footer
        logo="https://example.com/logo.png"
        about={{
            "About Us": "https://example.com/about",
            Careers: "https://example.com/careers",
        }}
        socialLinks={{
            github: "https://github.com/yourorg",
            instagram: "https://instagram.com/yourorg",
            facebook: "https://facebook.com/yourorg",
        }}
        services={["Web Development", "Design", "Consulting"]}
      />
    </>
  )
}

export default FooterPage