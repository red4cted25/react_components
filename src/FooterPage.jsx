import {default as Footer} from "./Components/Completed/Footers/Footer"

const FooterPage = () => {
  let footerInfo = {
    logo: "https://res.cloudinary.com/drnaycy06/image/upload/v1731009869/samples/logo.png",
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
    orgName: "YourOrg",
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