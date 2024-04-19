import ContactUs from './ui/contact-us/contact-us';
import Herospace from './ui/herospace/herospace'
import Projects from './ui/projects/projects';
import Team from './ui/team/team';
import Visions from './ui/visions/visions';
import Services from './ui/services/services';

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
      <Visions></Visions>
      <Services></Services>
      <Team></Team>
      <Projects></Projects>
      <ContactUs></ContactUs>
    </>
  )
}
