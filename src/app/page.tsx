import ContactUs from './ui/contact-us/contact-us';
import Herospace from './ui/herospace/herospace'

export type Herospace = {
  title: string;
  image: string;
  cta: string;
  cta_url: string;
}

export default async function Homepage() {
  return (
    <>
      <Herospace></Herospace>
      <ContactUs></ContactUs>
    </>
  )
}
