export const original = {
  books: [
    // ===== Elementary (Multi-grade) =====
    { id: "b1", title: "Exploring Stories Together", author: "Lydia Monroe", subjects: ["ELA", "Reading"], gradeLevels: ["K", 1, 2], curriculumIds: ["c3"], resourceIds: ["r1"] },
    { id: "b2", title: "Phonics and Early Reading Skills", author: "James Carter", subjects: ["ELA", "Phonics"], gradeLevels: ["K", 1], curriculumIds: ["c2"], resourceIds: [] },
    { id: "b3", title: "Math Adventures: Numbers and Patterns", author: "Sophie Lin", subjects: ["Math"], gradeLevels: [1, 2, 3], curriculumIds: ["c5"], resourceIds: ["r2"] },
    { id: "b4", title: "Building Strong Writers", author: "Evelyn Harper", subjects: ["ELA", "Writing"], gradeLevels: [2, 3, 4], curriculumIds: ["c1"], resourceIds: [] },
    { id: "b5", title: "Science Around Us", author: "Olivia Grant", subjects: ["Science"], gradeLevels: [1, 2, 3], curriculumIds: ["c9"], resourceIds: ["r3"] },
    { id: "b6", title: "Hands-On Life Science", author: "Nathan Flores", subjects: ["Science", "Biology"], gradeLevels: [3, 4, 5], curriculumIds: ["c9"], resourceIds: [] },
    { id: "b7", title: "World Stories for Young Readers", author: "Marisa Bennett", subjects: ["ELA", "Literature"], gradeLevels: [2, 3, 4], curriculumIds: ["c3"], resourceIds: [] },
    { id: "b8", title: "Early American History", author: "Caroline Pierce", subjects: ["Social Studies", "History"], gradeLevels: [3, 4, 5], curriculumIds: ["c12"], resourceIds: ["r4"] },
    { id: "b9", title: "Problem Solving Strategies", author: "Gregory Shaw", subjects: ["Math"], gradeLevels: [4, 5], curriculumIds: ["c7"], resourceIds: [] },
    { id: "b10", title: "Grammar for Growing Minds", author: "Daniel Reeves", subjects: ["ELA", "Grammar"], gradeLevels: [3, 4, 5], curriculumIds: ["c2"], resourceIds: [] },

    // ===== 7th =====
    { id: "b11", title: "Writing with Clarity", author: "Evelyn Harper", subjects: ["ELA"], gradeLevels: [7], curriculumIds: ["c1"], resourceIds: [] },
    { id: "b12", title: "Words for the Curious Mind", author: "Daniel Reeves", subjects: ["Vocabulary"], gradeLevels: [7], curriculumIds: ["c2"], resourceIds: [] },
    { id: "b13", title: "Journeys Through Medieval Worlds", author: "Marisa Bennett", subjects: ["Literature"], gradeLevels: [7], curriculumIds: ["c3"], resourceIds: [] },
    { id: "b14", title: "Foundations of Mathematical Thinking", author: "Steven Cole", subjects: ["Math"], gradeLevels: [7], curriculumIds: ["c5"], resourceIds: [] },
    { id: "b15", title: "Life Science Explorations", author: "Olivia Grant", subjects: ["Science"], gradeLevels: [7], curriculumIds: ["c8"], resourceIds: [] },

    // ===== 8th =====
    { id: "b16", title: "Writing with Purpose", author: "Evelyn Harper", subjects: ["ELA"], gradeLevels: [8], curriculumIds: ["c1"], resourceIds: [] },
    { id: "b17", title: "Advanced Vocabulary Builder", author: "Daniel Reeves", subjects: ["Vocabulary"], gradeLevels: [8], curriculumIds: ["c2"], resourceIds: [] },
    { id: "b18", title: "Prealgebra in Action", author: "Steven Cole", subjects: ["Math"], gradeLevels: [8], curriculumIds: ["c5"], resourceIds: [] },
    { id: "b19", title: "Physical Science Investigations", author: "Olivia Grant", subjects: ["Science"], gradeLevels: [8], curriculumIds: ["c8"], resourceIds: [] },
    { id: "b20", title: "American Beginnings to WWI", author: "Anthony Delgado", subjects: ["History"], gradeLevels: [8], curriculumIds: ["c11"], resourceIds: [] },

    // ===== 9th =====
    { id: "b21", title: "Literature and Composition I", author: "Evelyn Harper", subjects: ["ELA"], gradeLevels: [9], curriculumIds: ["c1"], resourceIds: [] },
    { id: "b22", title: "English 9: Classic Readings", author: "Noah Bennett", subjects: ["ELA"], gradeLevels: [9], curriculumIds: ["c13"], resourceIds: [] },
    { id: "b23", title: "Algebra I Concepts", author: "Gregory Shaw", subjects: ["Math"], gradeLevels: [9], curriculumIds: ["c7"], resourceIds: [] },
    { id: "b24", title: "Biology Foundations", author: "Olivia Grant", subjects: ["Science"], gradeLevels: [9], curriculumIds: ["c8"], resourceIds: [] },
    { id: "b25", title: "Biology: Life Systems", author: "Laura Jenkins", subjects: ["Science"], gradeLevels: [9], curriculumIds: ["c4"], resourceIds: [] },

    // ===== 10th =====
    { id: "b26", title: "Literature and Composition II", author: "Evelyn Harper", subjects: ["ELA"], gradeLevels: [10], curriculumIds: ["c1"], resourceIds: [] },
    { id: "b27", title: "World Literature Classics", author: "Margaret Ellis", subjects: ["ELA"], gradeLevels: [10], curriculumIds: ["c8"], resourceIds: [] },
    { id: "b28", title: "Geometry Essentials", author: "Gregory Shaw", subjects: ["Math"], gradeLevels: [10], curriculumIds: ["c7"], resourceIds: [] },
    { id: "b29", title: "Chemistry: Matter and Change", author: "Laura Jenkins", subjects: ["Science"], gradeLevels: [10], curriculumIds: ["c4"], resourceIds: [] },
    { id: "b30", title: "Modern World History", author: "Laura Jenkins", subjects: ["History"], gradeLevels: [10], curriculumIds: ["c4"], resourceIds: [] },

    // ===== 11th =====
    { id: "b31", title: "American Literature", author: "Evelyn Harper", subjects: ["ELA"], gradeLevels: [11], curriculumIds: ["c1"], resourceIds: [] },
    { id: "b32", title: "Algebra II Mastery", author: "Gregory Shaw", subjects: ["Math"], gradeLevels: [11], curriculumIds: ["c7"], resourceIds: [] },
    { id: "b33", title: "Physics Principles", author: "Laura Jenkins", subjects: ["Science"], gradeLevels: [11], curriculumIds: ["c4"], resourceIds: [] },
    { id: "b34", title: "Making America", author: "Robert Kendall", subjects: ["US History"], gradeLevels: [11], curriculumIds: ["c18"], resourceIds: [] },
    { id: "b35", title: "America Through the Lens", author: "Anthony Delgado", subjects: ["US History"], gradeLevels: [11], curriculumIds: ["c11"], resourceIds: [] },

    // ===== 12th =====
    { id: "b36", title: "British Literature Reader", author: "Margaret Ellis", subjects: ["ELA"], gradeLevels: [12], curriculumIds: ["c8"], resourceIds: [] },
    { id: "b37", title: "Precalculus Foundations", author: "Gregory Shaw", subjects: ["Math"], gradeLevels: [12], curriculumIds: ["c7"], resourceIds: [] },
    { id: "b38", title: "Economics in Action", author: "Laura Jenkins", subjects: ["Economics"], gradeLevels: [12], curriculumIds: ["c4"], resourceIds: [] },
    { id: "b39", title: "American Government", author: "Anthony Delgado", subjects: ["Government"], gradeLevels: [12], curriculumIds: ["c11"], resourceIds: [] },
    { id: "b40", title: "Environmental Science", author: "Olivia Grant", subjects: ["Science"], gradeLevels: [12], curriculumIds: ["c8"], resourceIds: [] }
  ],

  curriculums: [
    { id: "c1", name: "Essentials in Writing" },
    { id: "c2", name: "Wordly Wise" },
    { id: "c3", name: "Moving Beyond the Page" },
    { id: "c4", name: "McGraw Hill" },
    { id: "c5", name: "Thinkwell" },
    { id: "c6", name: "Live Online Math" },
    { id: "c7", name: "Saxon" },
    { id: "c8", name: "Oak Meadow" },
    { id: "c9", name: "Elemental Science" },
    { id: "c10", name: "History Odyssey" },
    { id: "c11", name: "Cengage" },
    { id: "c12", name: "Bookshark" },
    { id: "c13", name: "Write at Home" },
    { id: "c14", name: "Blackbird and Company" },
    { id: "c15", name: "Mr. D Math" },
    { id: "c16", name: "The Classical Historian" },
    { id: "c17", name: "Miss Crady the Math Lady" },
    { id: "c18", name: "Making America" }
  ],

  resources: [
    { id: "r1", bookId: "b1", title: "Reading Activity Sheets" },
    { id: "r2", bookId: "b3", title: "Math Workbook" },
    { id: "r3", bookId: "b5", title: "Science Kit" },
    { id: "r4", bookId: "b8", title: "Timeline Activities" }
  ]
};