import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.$transaction([
    prisma.category.create({ data: { title: 'Math' } }),
    prisma.category.create({ data: { title: 'History' } }),
    prisma.category.create({ data: { title: 'Geography' } }),
    prisma.category.create({ data: { title: 'Science' } }),
  ]);

  const quizzes = await prisma.$transaction([
    prisma.quiz.create({ data: { title: 'Algebra Basics', description: 'Introduction to algebra', category_id: categories[0].id } }),
    prisma.quiz.create({ data: { title: 'Geometry Fundamentals', description: 'Shapes and theorems', category_id: categories[0].id } }),
    prisma.quiz.create({ data: { title: 'Calculus Introduction', description: 'Limits and derivatives', category_id: categories[0].id } }),
    prisma.quiz.create({ data: { title: 'World War I', description: 'Major events of WWI', category_id: categories[1].id } }),
    prisma.quiz.create({ data: { title: 'World War II', description: 'Major events of WWII', category_id: categories[1].id } }),
    prisma.quiz.create({ data: { title: 'Cold War', description: 'Tensions between the West and USSR', category_id: categories[1].id } }),
    prisma.quiz.create({ data: { title: 'World Capitals', description: 'Identify world capitals', category_id: categories[2].id } }),
    prisma.quiz.create({ data: { title: 'Continents and Oceans', description: 'Geographic features of Earth', category_id: categories[2].id } }),
    prisma.quiz.create({ data: { title: 'Flags of the World', description: 'Recognize country flags', category_id: categories[2].id } }),
    prisma.quiz.create({ data: { title: 'Physics Basics', description: 'Forces and motion', category_id: categories[3].id } }),
    prisma.quiz.create({ data: { title: 'Chemistry Elements', description: 'Periodic table and atoms', category_id: categories[3].id } }),
    prisma.quiz.create({ data: { title: 'Biology Cells', description: 'Structure and function of cells', category_id: categories[3].id } }),
  ]);

  await prisma.$transaction([
    prisma.question.create({ data: { question: `What is x in 2x = 10?`, options: ["3", "5", "10", "2"], correct_answer: `5`, quiz_id: quizzes[0].id } }),
    prisma.question.create({ data: { question: `Solve: 3x + 2 = 11`, options: ["3", "5", "2", "1"], correct_answer: `3`, quiz_id: quizzes[0].id } }),
    prisma.question.create({ data: { question: `What is the value of x in x^2 = 16?`, options: ["2", "4", "6", "8"], correct_answer: `4`, quiz_id: quizzes[0].id } }),
    prisma.question.create({ data: { question: `Which is a linear equation?`, options: ["x + 2 = 5", "x^2 + 3 = 4", "x^3 = 8", "x/2 = x"], correct_answer: `x + 2 = 5`, quiz_id: quizzes[0].id } }),
    prisma.question.create({ data: { question: `Which one is a variable?`, options: ["3", "x", "=", "5"], correct_answer: `x`, quiz_id: quizzes[0].id } }),
    prisma.question.create({ data: { question: `How many degrees are in a triangle?`, options: ["180", "90", "360", "45"], correct_answer: `180`, quiz_id: quizzes[1].id } }),
    prisma.question.create({ data: { question: `What shape has four equal sides?`, options: ["Rectangle", "Square", "Triangle", "Pentagon"], correct_answer: `Square`, quiz_id: quizzes[1].id } }),
    prisma.question.create({ data: { question: `What is the sum of interior angles in a quadrilateral?`, options: ["360", "180", "90", "720"], correct_answer: `360`, quiz_id: quizzes[1].id } }),
    prisma.question.create({ data: { question: `Which has three sides?`, options: ["Triangle", "Square", "Circle", "Hexagon"], correct_answer: `Triangle`, quiz_id: quizzes[1].id } }),
    prisma.question.create({ data: { question: `What is a right angle?`, options: ["90 degrees", "45 degrees", "180 degrees", "360 degrees"], correct_answer: `90 degrees`, quiz_id: quizzes[1].id } }),
    prisma.question.create({ data: { question: `What is the derivative of x^2?`, options: ["2x", "x", "x^2", "1"], correct_answer: `2x`, quiz_id: quizzes[2].id } }),
    prisma.question.create({ data: { question: `What does a derivative represent?`, options: ["Slope", "Area", "Volume", "Length"], correct_answer: `Slope`, quiz_id: quizzes[2].id } }),
    prisma.question.create({ data: { question: `What is the integral of 1/x?`, options: ["ln|x|", "x", "1", "x^2"], correct_answer: `ln|x|`, quiz_id: quizzes[2].id } }),
    prisma.question.create({ data: { question: `What is the limit of x→0 for sin(x)/x?`, options: ["1", "0", "Infinity", "Undefined"], correct_answer: `1`, quiz_id: quizzes[2].id } }),
    prisma.question.create({ data: { question: `What is ∫x dx?`, options: ["(1/2)x^2 + C", "x^2", "2x", "ln(x)"], correct_answer: `(1/2)x^2 + C`, quiz_id: quizzes[2].id } }),
    prisma.question.create({ data: { question: `When did WWI begin?`, options: ["1914", "1939", "1945", "1900"], correct_answer: `1914`, quiz_id: quizzes[3].id } }),
    prisma.question.create({ data: { question: `What sparked WWI?`, options: ["Assassination of Archduke", "Pearl Harbor", "Treaty signing", "Nuclear attack"], correct_answer: `Assassination of Archduke`, quiz_id: quizzes[3].id } }),
    prisma.question.create({ data: { question: `Who was part of the Triple Entente?`, options: ["France, UK, Russia", "Germany, Austria, Italy", "USA, UK, France", "China, Japan, USA"], correct_answer: `France, UK, Russia`, quiz_id: quizzes[3].id } }),
    prisma.question.create({ data: { question: `When did WWI end?`, options: ["1918", "1945", "1939", "1925"], correct_answer: `1918`, quiz_id: quizzes[3].id } }),
    prisma.question.create({ data: { question: `What treaty ended WWI?`, options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Yalta", "Treaty of Rome"], correct_answer: `Treaty of Versailles`, quiz_id: quizzes[3].id } }),
    prisma.question.create({ data: { question: `When did World War II begin?`, options: ["1939", "1940", "1914", "1945"], correct_answer: `1939`, quiz_id: quizzes[4].id } }),
    prisma.question.create({ data: { question: `Which countries were part of the Axis Powers?`, options: ["Germany, Italy, Japan", "USA, UK, USSR", "France, Poland, UK", "Spain, Portugal, Turkey"], correct_answer: `Germany, Italy, Japan`, quiz_id: quizzes[4].id } }),
    prisma.question.create({ data: { question: `What event led the USA to join WWII?`, options: ["Pearl Harbor", "D-Day", "Battle of the Bulge", "Berlin Blockade"], correct_answer: `Pearl Harbor`, quiz_id: quizzes[4].id } }),
    prisma.question.create({ data: { question: `What was the Holocaust?`, options: ["Genocide of Jews", "Military operation", "Code name for invasion", "Economic crisis"], correct_answer: `Genocide of Jews`, quiz_id: quizzes[4].id } }),
    prisma.question.create({ data: { question: `Which conference decided post-war Europe?`, options: ["Yalta", "Versailles", "Geneva", "NATO Summit"], correct_answer: `Yalta`, quiz_id: quizzes[4].id } }),
    prisma.question.create({ data: { question: `Who were the main rivals in the Cold War?`, options: ["USA and USSR", "UK and Germany", "China and Japan", "France and Italy"], correct_answer: `USA and USSR`, quiz_id: quizzes[5].id } }),
    prisma.question.create({ data: { question: `What symbolized the Cold War division?`, options: ["Berlin Wall", "White House", "Tower of London", "Pyramids"], correct_answer: `Berlin Wall`, quiz_id: quizzes[5].id } }),
    prisma.question.create({ data: { question: `When did the Berlin Wall fall?`, options: ["1989", "1991", "1945", "1970"], correct_answer: `1989`, quiz_id: quizzes[5].id } }),
    prisma.question.create({ data: { question: `What was the Cuban Missile Crisis?`, options: ["Nuclear standoff", "Trade deal", "Space race", "Spy scandal"], correct_answer: `Nuclear standoff`, quiz_id: quizzes[5].id } }),
    prisma.question.create({ data: { question: `What does NATO stand for?`, options: ["North Atlantic Treaty Organization", "Nuclear Agreement Trade Office", "Neutral Atlantic Treaty Order", "National Army Treaty Operation"], correct_answer: `North Atlantic Treaty Organization`, quiz_id: quizzes[5].id } }),
    prisma.question.create({ data: { question: `What is the capital of France?`, options: ["Paris", "London", "Rome", "Berlin"], correct_answer: `Paris`, quiz_id: quizzes[6].id } }),
    prisma.question.create({ data: { question: `What is the capital of Japan?`, options: ["Tokyo", "Beijing", "Seoul", "Bangkok"], correct_answer: `Tokyo`, quiz_id: quizzes[6].id } }),
    prisma.question.create({ data: { question: `What is the capital of Canada?`, options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], correct_answer: `Ottawa`, quiz_id: quizzes[6].id } }),
    prisma.question.create({ data: { question: `What is the capital of Australia?`, options: ["Canberra", "Sydney", "Melbourne", "Perth"], correct_answer: `Canberra`, quiz_id: quizzes[6].id } }),
    prisma.question.create({ data: { question: `What is the capital of Brazil?`, options: ["Bras\u00edlia", "Rio de Janeiro", "S\u00e3o Paulo", "Salvador"], correct_answer: `Brasília`, quiz_id: quizzes[6].id } }),
    prisma.question.create({ data: { question: `How many continents are there?`, options: ["7", "6", "5", "8"], correct_answer: `7`, quiz_id: quizzes[7].id } }),
    prisma.question.create({ data: { question: `Which is the largest ocean?`, options: ["Pacific", "Atlantic", "Indian", "Arctic"], correct_answer: `Pacific`, quiz_id: quizzes[7].id } }),
    prisma.question.create({ data: { question: `Which continent is Egypt in?`, options: ["Africa", "Asia", "Europe", "Australia"], correct_answer: `Africa`, quiz_id: quizzes[7].id } }),
    prisma.question.create({ data: { question: `What is the smallest continent?`, options: ["Australia", "Europe", "Antarctica", "South America"], correct_answer: `Australia`, quiz_id: quizzes[7].id } }),
    prisma.question.create({ data: { question: `Which ocean is east of Africa?`, options: ["Indian", "Atlantic", "Pacific", "Southern"], correct_answer: `Indian`, quiz_id: quizzes[7].id } }),
    prisma.question.create({ data: { question: `Which flag has a red circle on white?`, options: ["Japan", "Bangladesh", "South Korea", "China"], correct_answer: `Japan`, quiz_id: quizzes[8].id } }),
    prisma.question.create({ data: { question: `Which country has a maple leaf on its flag?`, options: ["Canada", "USA", "UK", "Australia"], correct_answer: `Canada`, quiz_id: quizzes[8].id } }),
    prisma.question.create({ data: { question: `Which country’s flag is red with five stars?`, options: ["China", "Vietnam", "North Korea", "Laos"], correct_answer: `China`, quiz_id: quizzes[8].id } }),
    prisma.question.create({ data: { question: `Which flag is blue and yellow?`, options: ["Ukraine", "Sweden", "Brazil", "Greece"], correct_answer: `Ukraine`, quiz_id: quizzes[8].id } }),
    prisma.question.create({ data: { question: `Which country has a tricolor of orange, white, and green?`, options: ["India", "Ireland", "Ivory Coast", "Italy"], correct_answer: `India`, quiz_id: quizzes[8].id } }),
    prisma.question.create({ data: { question: `What is the unit of force?`, options: ["Newton", "Joule", "Watt", "Pascal"], correct_answer: `Newton`, quiz_id: quizzes[9].id } }),
    prisma.question.create({ data: { question: `What is the speed of light?`, options: ["299,792,458 m/s", "3,000,000 m/s", "150,000 km/s", "1,000,000 m/s"], correct_answer: `299,792,458 m/s`, quiz_id: quizzes[9].id } }),
    prisma.question.create({ data: { question: `What does E=mc^2 represent?`, options: ["Energy-mass equivalence", "Gravitational law", "Force equation", "Friction law"], correct_answer: `Energy-mass equivalence`, quiz_id: quizzes[9].id } }),
    prisma.question.create({ data: { question: `Which law states that for every action, there is an equal reaction?`, options: [], correct_answer: `Newton\'s Third Law`, quiz_id: quizzes[9].id } }),
    prisma.question.create({ data: { question: `What is measured in volts?`, options: ["Electric potential", "Current", "Resistance", "Power"], correct_answer: `Electric potential`, quiz_id: quizzes[9].id } }),
    prisma.question.create({ data: { question: `What is the symbol for water?`, options: ["H2O", "O2", "CO2", "NaCl"], correct_answer: `H2O`, quiz_id: quizzes[10].id } }),
    prisma.question.create({ data: { question: `What element has the symbol Na?`, options: ["Sodium", "Nitrogen", "Neon", "Nickel"], correct_answer: `Sodium`, quiz_id: quizzes[10].id } }),
    prisma.question.create({ data: { question: `Which gas do plants absorb?`, options: ["CO2", "O2", "H2", "N2"], correct_answer: `CO2`, quiz_id: quizzes[10].id } }),
    prisma.question.create({ data: { question: `What is the periodic table?`, options: ["Element chart", "Molecule map", "Acid chart", "Protein map"], correct_answer: `Element chart`, quiz_id: quizzes[10].id } }),
    prisma.question.create({ data: { question: `What is the atomic number of carbon?`, options: ["6", "12", "14", "2"], correct_answer: `6`, quiz_id: quizzes[10].id } }),
    prisma.question.create({ data: { question: `What is the basic unit of life?`, options: ["Cell", "Atom", "Organ", "Molecule"], correct_answer: `Cell`, quiz_id: quizzes[11].id } }),
    prisma.question.create({ data: { question: `What part of the cell contains DNA?`, options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"], correct_answer: `Nucleus`, quiz_id: quizzes[11].id } }),
    prisma.question.create({ data: { question: `What is the powerhouse of the cell?`, options: ["Mitochondria", "Nucleus", "Golgi apparatus", "Chloroplast"], correct_answer: `Mitochondria`, quiz_id: quizzes[11].id } }),
    prisma.question.create({ data: { question: `Which cells carry oxygen?`, options: ["Red blood cells", "White blood cells", "Neurons", "Platelets"], correct_answer: `Red blood cells`, quiz_id: quizzes[11].id } }),
    prisma.question.create({ data: { question: `Which organelle makes proteins?`, options: ["Ribosome", "Nucleus", "Lysosome", "Chloroplast"], correct_answer: `Ribosome`, quiz_id: quizzes[11].id } }),
  ]);

  await prisma.user.create({
    data: {
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin@admin.com',
      is_admin: true,
      password: '$2a$10$rx5OA5q69vQPSvLHwFAOguk6.6/EhWJTkAkPsPVpZJHJUCHx.zExC'
    }
  })

}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
