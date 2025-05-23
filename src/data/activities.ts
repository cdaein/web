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
    "screening",
    "teaching",
  ]),
  /**
   * Same as work post title slug for filtering. (ex. ekstasy-type-club) It may be an array for multiple works
   * TODO: it can accept array of slugs but it is not being handled atm.
   */
  // slug: z.string().or(z.string().array()).optional(),
  slug: z.string().optional(),
  title: z.string(),
  /** ex. moderator, presenter */
  role: z.string().optional(),
  date: z.string().or(z.string().array()),
  /** Place of exhibition (ie. museum name) */
  place: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  link: z.string().or(z.string().array()).optional(),
});

export type Activity = z.infer<typeof schema>;

const activities: Activity[] = [
  {
    type: "exhibition",
    title: "Constellations 2025: Uncertainty",
    date: "2025-05-16",
    place: "CETI Institute",
    city: "Portland, OR",
    country: "USA",
    link: ["https://ceti.institute/event/constellations-uncertainty/"],
  },
  {
    type: "exhibition",
    title: "Demo Festival 2025 Cities Edition",
    date: "2025-01-30",
    country: "The Netherlands",
    link: ["https://demofestival.com/designers/daeinc"],
  },
  {
    type: "exhibition",
    // TODO: support multiple slugs
    //       then, update each mdx to include <ActivityList>
    // slugs: ["duet", "time-intertwined"],
    slug: "duet",
    title: "Bideotikan Digital Art Festival",
    date: "2024-10-24",
    city: "Bilbao",
    country: "Spain",
    link: ["https://bideotikan.art/artistas/daeinc-en/"],
  },
  {
    type: "exhibition",
    slug: "time-intertwined",
    title: "Digital Art Mile",
    date: "2024-06-10",
    place: "Basel Art Center Space 31",
    city: "Basel",
    country: "Switzerland",
    link: [
      "https://x.com/fx_hash_/status/1800605168809210358",
      "https://baselartcenter.ch/event/the-digital-art-mile/?event_date=2024-06-10",
    ],
  },
  {
    type: "exhibition",
    slug: "sequenced",
    title: "Processing Community Day 2024 at Porto",
    date: "2024-05-02",
    city: "Porto",
    country: "Portugal",
    link: "https://pcd.fba.up.pt/2024/exhibition/sequenced.htm",
  },
  {
    type: "lecture",
    title: "Creative Jam",
    place: "Hush Studios",
    date: "2024-03-27",
    city: "New York",
    link: "https://www.instagram.com/p/C5moEbpNeCe/?img_index=1",
  },
  {
    type: "exhibition",
    title: "Motion Evolving",
    date: "2023-09-29",
    city: "Beijing",
    country: "China",
  },
  {
    slug: "sequenced",
    type: "exhibition",
    title: "Taipei Hacker House",
    date: "2023-05-10",
    city: "Taipei",
    country: "Taiwan",
    link: "https://blog.exchange.art/taipei-hacker-house/",
  },
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
    type: "screening",
    slug: "don-cajon",
    title: "La Cinémathèque Temporaire du Collectif Jeune Cinéma",
    date: "2021-09-25",
    place: "Mains D'oeuvres",
    city: "Saint-Ouen",
    country: "France",
    link: "https://cjcinema.org/agenda/2021/septembre/cinematheque-temporaire-du-cjc-27/",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Collectif Jeune Cinéma Jeune Public",
    date: "2020-09-24",
    place: "Instants Chavirés",
    city: "Montreuil",
    country: "France",
    link: "https://www.facebook.com/collectif.jeunecinema.7/posts/2014776958821784",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Mon Oeil Web Program",
    date: "2019-01-24",
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
    date: "2021-01-14",
    link: "https://www.nytimes.com/interactive/2021/01/14/multimedia/year-in-illustration.html",
  },
  {
    type: "lecture",
    title: "Hangeul Lettering Online Workshop",
    date: "2020-06-16",
    link: "https://www.instagram.com/p/CCHWVyKB16h/?img_index=1",
  },
  {
    type: "lecture",
    title: "AICAD Symposium: Include Me!",
    role: "Presenter",
    date: "2019-11-07",
    place: "Otis College of Art and Design",
    city: "Los Angeles",
    country: "USA",
    link: "https://www.aicad.org/wp-content/uploads/AICAD-Symposium-Schedule-11-4.pdf",
  },
  {
    type: "event",
    title: "Convergence Festival: AI and Creativity",
    role: "Moderator",
    date: "2019-01-11",
    city: "Seoul",
    country: "South Korea",
  },
  {
    type: "interview",
    slug: "chillin",
    title: "p5js Website Showcase",
    date: "2019",
    // link: "https://p5js.org/showcase/featuring/daein-chung.html",
    link: "https://web.archive.org/web/20230205094313/https://p5js.org/showcase/featuring/daein-chung.html",
  },
  {
    type: "publication",
    title: "AIGA Frontier Reader",
    date: "2019-04-00",
  },
  {
    type: "lecture",
    title: "Hangeul Typography Workshop I & II",
    date: "2018-11-00",
    place: "MICA",
    city: "Baltimore",
    country: "USA",
    link: "https://www.instagram.com/p/Bp6ykh1FT0m/",
  },
  {
    type: "featured",
    slug: "build-the-system",
    title: "The T Magazine",
    date: "2017",
    country: "South Korea",
  },
  {
    type: "lecture",
    title: "AIGA Frontier Conference",
    role: "Presenter",
    date: "2016-10-7",
    link: "https://frontier.aiga.org",
  },
  {
    type: "teaching",
    title: "Maryland Institute College of Art",
    role: "Full-time Faculty",
    date: ["2016", "2021"],
    city: "Baltimore, MD",
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
    type: "award",
    slug: "type-and-media",
    title: "Type Directors Club 62 Communication Design Award",
    date: "2016",
    city: "New York",
    country: "USA",
  },
  {
    type: "exhibition",
    slug: "ekstasy-type-club",
    title: "Type Directors Club 62 Exhibition",
    date: "2016",
    place: "Cooper Union",
    city: "New York",
    country: "USA",
  },
  {
    type: "exhibition",
    slug: "type-and-media",
    title: "Type Directors Club 62 Exhibition",
    date: "2016",
    place: "Cooper Union",
    city: "New York",
    country: "USA",
  },
  {
    type: "interview",
    title: "CA Magazine Korea",
    date: "2016",
    country: "South Korea",
  },
  {
    type: "teaching",
    title: "Boston University",
    role: "Full-time Lecturer",
    date: ["2015", "2016"],
    city: "Boston, MA",
  },
  {
    type: "featured",
    slug: "ekstasy-type-club",
    title: "IdN Pick of the Month",
    date: "2015",
    link: "https://www.idnworld.com/potm/EkstasyTypeClub-DaeInChung",
  },
  {
    type: "award",
    slug: "type-and-media",
    title:
      "Best of the Show Award at The Society of Korean Typography Exhibition 10",
    date: "2015-06-27",
    city: "Seoul",
    country: "South Korea",
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
    type: "teaching",
    title: "Kookmin University",
    role: "Part-time Instructor",
    date: "2015",
    city: "Seoul",
    country: "South Korea",
  },
  {
    type: "screening",
    slug: "don-cajon",
    title: "Animascope Kid #2",
    date: "2012-06-20",
    place: "La Gare Saint Sauveur",
    city: "Lille",
    country: "France",
  },
  {
    type: "teaching",
    title: "Santa Fe University of Art and Design",
    role: "Full-time Faculty",
    date: ["2011", "2014"],
    city: "Santa Fe, NM",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Melbourne International Animation Festival",
    date: "2009",
    city: "Melbourne",
    country: "Australia",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "London International Film Festival",
    date: "2009",
    city: "London",
    country: "UK",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Rome Film Festival",
    date: "2008",
    city: "Rome",
    country: "Italy",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Oxford Film Festival",
    date: "2008",
    city: "Oxford, MS",
    country: "USA",
    link: "https://www.ox-film.com/festival-archive/2lrgqvfer3y3z4oq8q2r4yso02phoj",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Ann Arbor Film Festival",
    date: "2008-05",
    city: "Ann Arbor",
    country: "USA",
    link: "http://media.aadl.org/documents/pdf/aaff/aaff_46_program.pdf",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "CalArts Experimental Animation Showcase",
    date: "2008-05",
    city: "Los Angeles",
    country: "USA",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Student Shorts Film Festival",
    date: "2007",
    city: "Toronto",
    country: "Canada",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Experimental Film and Video Festival",
    date: "2007",
    city: "Seoul",
    country: "South Korea",
    link: "https://www.cinematheque.seoul.kr/bbs/board.php?bo_table=program&wr_id=208&page=54&ckattempt=1",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Animation Block Party",
    date: "2007",
    city: "New York",
    country: "USA",
    link: "https://www.animationblock.com/summerfest2007",
  },
  {
    type: "screening",
    slug: "hypervibes",
    title: "Collectif Jeune Cinéma",
    date: "2007",
    city: "Paris",
    country: "France",
  },
];

export default activities;
