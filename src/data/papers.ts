export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abbr: string;
  preview: string;
  code?: string;
  arxiv?: string;
  url?: string;
  selected?: boolean;
}

export const papers: Paper[] = [
  {
    title: "{BoQ}: A Place is Worth a Bag of Learnable Queries",
    authors: ["Amar Ali-bey", "Brahim Chaib-draa", "Philippe Giguère"],
    venue: "CVPR",
    year: 2024,
    abbr: "CVPR",
    preview: "cvpr.jpg",
    code: "https://github.com/amaralibey/Bag-of-Queries",
    arxiv: "2405.07364",
    selected: true,
  },
  {
    title: "{MixVPR}: Feature Mixing for Visual Place Recognition",
    authors: ["Amar Ali-bey", "Brahim Chaib-draa", "Philippe Giguère"],
    venue: "WACV",
    year: 2023,
    abbr: "WACV",
    preview: "wacv.png",
    code: "https://github.com/amaralibey/MixVPR",
    arxiv: "2303.02190",
    selected: true,
  },
  {
    title: "{GSV-Cities}: Toward Appropriate Supervised Visual Place Recognition",
    authors: ["Amar Ali-bey", "Brahim Chaib-draa", "Philippe Giguère"],
    venue: "Neurocomputing",
    year: 2022,
    abbr: "Neuro",
    preview: "neuro.jpeg",
    code: "https://github.com/amaralibey/gsv-cities",
    arxiv: "2210.10239",
    selected: true,
  },
  {
    title: "Global Proxy-based Hard Mining for Visual Place Recognition",
    authors: ["Amar Ali-Bey", "Brahim Chaib-draa", "Philippe Giguere"],
    venue: "BMVC",
    year: 2022,
    abbr: "BMVC",
    preview: "bmvc.png",
    code: "https://github.com/amaralibey/GPM",
    arxiv: "2302.14217",
    url: "https://bmvc2022.mpi-inf.mpg.de/0958.pdf",
    selected: true,
  }
];
