import {default as Footer} from "./Components/Completed/Footers/Footer"

const FooterPage = () => {
  let footerInfo = {
    logo: "https://example.com/logo.png",
    about: {
        "About Us": "https://example.com/about",
        "Careers": "https://example.com/careers",
    },
    socialLinks: [
        "https://github.com/yourorg",
        "https://instagram.com/yourorg",
        "https://facebook.com/yourorg",
    ],
    services: ["Web Development", "Design", "Consulting"],
  }
  return (
    <>
      <header style={{height: '10vh', backgroundColor: 'blue'}}></header>
      <main style={{height: '60vh', backgroundColor: 'grey'}}></main>
      <Footer { ...footerInfo } />
    </>
  )
}

export default FooterPage