import { z } from "zod";

const schema = z.object({
  /** Type of exhibitions */
  type: z.enum([
    "award",
    "event",
    "exhibition",
    "featured",
    "interview",
    "lecture",
    "publication",
  ]),
  /**
   * Same as work post title slug for filtering. (ex. ekstasy-type-club) Can use  an array for multiple works
   * TODO: it can accept array of slugs but it is not being handled atm.
   */
  slug: z.string().or(z.string().array()).optional(),
  title: z.string(),
  /** ex. moderator, presenter */
  role: z.string().optional(),
  date: z.string(),
  /** Place of exhibition (ie. museum name) */
  place: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  link: z.string().or(z.string().array()).optional(),
});

export type Activity = z.infer<typeof schema>;

const activities: Activity[] = [
  {
    type: "featured",
    title: "We Want Art Everywhere",
    date: "2022",
    city: "Cannes",
    country: "France",
    link: "https://www.wwae.fr/belle-vue/",
  },
  {
    type: "exhibition",
    title: "Demo Festival",
    date: "2022-10-06",
    country: "The Netherlands",
    link: ["https://demofestival.com/past-festivals/demofestival2022"],
  },
  {
    type: "interview",
    title: "Gather Art",
    date: "2022-10-10",
    link: "https://www.fxhash.xyz/article/daeinc-interview",
  },
  {
    type: "exhibition",
    slug: "time-intertwined",
    title: "Unblock Gaudi",
    date: "2022-05-26",
    place: "The Museum Angewandte Kunst",
    city: "Frankfurt",
    country: "Germany",
    link: [
      "https://www.museumangewandtekunst.de/en/visit/exhibitions/unblock-gaudi/",
      "https://unblockgaudi.xyz/week-section",
    ],
  },
  {
    type: "exhibition",
    slug: "don-cajon",
    title: "La Cinémathèque Temporaire du Collectif Jeune Cinéma",
    date: "2021-09-25",
    place: "Mains D'oeuvres",
    city: "Saint-Ouen",
    country: "France",
    link: "https://cjcinema.org/agenda/2021/septembre/cinematheque-temporaire-du-cjc-27/",
  },
  {
    type: "exhibition",
    slug: "hypervibes",
    title: "Mon Oeil Web Program",
    date: "2019",
    place: "Centre Pompidou",
    city: "Paris",
    country: "France",
    link: "https://www.centrepompidou.fr/fr/videos/tag/mon-oeil",
  },
  {
    type: "exhibition",
    title: "Demo Festival",
    date: "2019-11-07",
    city: "Amsterdam",
    country: "The Netherlands",
    link: ["https://demofestival.com/past-festivals/demofestival2019"],
  },
  {
    type: "publication",
    title: "AIGA Frontier Reader",
    date: "2019",
  },
  {
    type: "lecture",
    title: "AIGA Frontier Conference",
    role: "Presenter",
    date: "2016",
    link: "https://frontier.aiga.org",
  },
  {
    type: "featured",
    slug: "time-intertwined",
    title: "Creative Applications",
    date: "2022-05-24",
    link: "https://www.creativeapplications.net/nft/time-intertwined-daeinc/",
  },
  {
    type: "featured",
    slug: "nyt-apple-censorship",
    title: "New York Times: The Year In Illustration",
    date: "2020",
    link: "https://www.nytimes.com/interactive/2021/01/14/multimedia/year-in-illustration.html",
  },
  {
    type: "lecture",
    title: "AICAD Symposium: Include Me!",
    role: "Presenter",
    date: "2019",
    place: "Otis College of Art and Design",
    city: "Los Angeles",
    country: "USA",
  },
  {
    type: "event",
    title: "Convergence Festival: AI and Creativity",
    role: "Moderator",
    date: "2019",
    city: "Seoul",
    country: "South Korea",
  },
  {
    type: "interview",
    slug: "chillin",
    title: "p5js Website Showcase",
    date: "2019",
    link: "https://p5js.org/showcase/featuring/daein-chung.html",
  },
  {
    type: "featured",
    slug: "build-the-system",
    title: "The T Magazine",
    date: "2017",
    country: "South Korea",
  },
  {
    type: "publication",
    title: "LetterSeed 13 Typography Journal",
    date: "2016-07-15",
    country: "South Korea",
    link: "https://agbook.co.kr/books/letterseed-13",
  },
  {
    type: "award",
    slug: "build-the-system",
    title: "Graphis Poster Annual Gold Winner",
    date: "2016",
    country: "South Korea",
  },
  {
    type: "featured",
    slug: "ekstasy-type-club",
    title: "Page Magazine",
    date: "2016-05-09",
    country: "Germany",
    link: "https://page-online.de/typografie/der-type-directors-club-hat-entschieden-das-best-of-type-design-2016-teil-3/",
  },
  {
    type: "award",
    slug: "ekstasy-type-club",
    title: "Type Directors Club 62 Communication Design Award",
    date: "2016",
    city: "New York",
    country: "USA",
  },
  {
    type: "featured",
    slug: "ekstasy-type-club",
    title: "IdN Pick of the Month",
    date: "2015",
    link: "https://www.idnworld.com/potm/EkstasyTypeClub-DaeInChung",
  },
  {
    type: "exhibition",
    slug: "ekstasy-type-club",
    title: "The Society of Korean Typography Exhibition 10: Intersection",
    date: "2015-06-27",
    city: "Seoul",
    country: "South Korea",
    link: "http://koreantypography.org/ko/archives/journal_view.asp?board_num=15&key=title&keyword=&table_nm=exhibit&page=1",
  },
  {
    type: "exhibition",
    slug: "hypervibes",
    title: "Ann Arbor Film Festival",
    date: "2008",
    city: "Ann Arbor",
    country: "USA",
    link: "http://media.aadl.org/documents/pdf/aaff/aaff_46_program.pdf",
  },
];

export default activities;
