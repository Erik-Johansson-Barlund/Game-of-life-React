export const titleScreen = [
  [3, 4, 8, 9, 13, 15, 18, 19, 20, 25, 26, 29, 30, 31, 35, 39, 41, 42, 43, 45, 46, 47],
  [2, 7, 10, 12, 14, 16, 18, 24, 27, 29, 35, 39, 41, 45],
  [2, 7, 10, 12, 14, 16, 18, 24, 27, 29, 35, 39, 41, 45],
  [2, 7, 8, 10, 12, 16, 18, 19, 24, 27, 29, 30, 35, 39, 41, 42, 45, 46],
  [2, 4, 5, 7, 10, 12, 14, 16, 18, 24, 27, 29, 35, 39, 41, 45],
  [2, 5, 7, 10, 12, 16, 18, 24, 27, 29, 35, 39, 41, 45],
  [3, 4, 7, 10, 12, 16, 18, 19, 20, 25, 26, 29, 35, 36, 37, 39, 41, 45, 46, 47],
  [],
  [],
  [],
  [],
  [],
  [],
  [25],
  [27],
  [25, 26, 27]
];

export const gosperGliderGun = [
  [27],
  [25, 27],
  [15, 16, 23, 24, 37, 38],
  [14, 18, 23, 24, 37, 38],
  [3, 4, 13, 19, 23, 24],
  [3, 4, 13, 17, 19, 20, 25, 27],
  [13, 19, 27],
  [14, 18],
  [15, 16]
]

export const whatsThis = [
  [39],
  [37, 39, 40],
  [37, 39],
  [37],
  [35],
  [33, 35]
]

export const models: { title: string; model: number[][]; description: string }[] = [
  {
    title: 'Gosper glider gun',
    model: gosperGliderGun,
    description:
      'The first known gun, and indeed the first known finite pattern with unbounded growth, found by Bill Gosper in November 1970.',
  },
];