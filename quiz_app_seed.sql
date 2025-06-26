

    CREATE TABLE category(
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        title VARCHAR(255)
    );
    

    CREATE TABLE quiz(
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        title VARCHAR(255),
        description VARCHAR(255),
        category_id INT,
        FOREIGN KEY (category_id) REFERENCES category(id)
    );
    

    CREATE TABLE question(
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        question VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
        `options` JSON,
        correct_answer VARCHAR(255),
        quiz_id INT,
        FOREIGN KEY (quiz_id) REFERENCES quiz(id)
    );
    

    INSERT INTO category (title) VALUES 
    ('Math'),
    ('History'),
    ('Geography'),
    ('Science');
    

    INSERT INTO quiz (title, description, category_id) VALUES
    ('Algebra Basics', 'Introduction to algebra', 1),
    ('Geometry Fundamentals', 'Shapes and theorems', 1),
    ('Calculus Introduction', 'Limits and derivatives', 1),
    ('World War I', 'Major events of WWI', 2),
    ('World War II', 'Major events of WWII', 2),
    ('Cold War', 'Tensions between the West and USSR', 2),
    ('World Capitals', 'Identify world capitals', 3),
    ('Continents and Oceans', 'Geographic features of Earth', 3),
    ('Flags of the World', 'Recognize country flags', 3),
    ('Physics Basics', 'Forces and motion', 4),
    ('Chemistry Elements', 'Periodic table and atoms', 4),
    ('Biology Cells', 'Structure and function of cells', 4);
    
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is x in 2x = 10?',
'["3", "5", "10", "2"]',
'5',
1
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Solve: 3x + 2 = 11',
'["3", "5", "2", "1"]',
'3',
1
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the value of x in x^2 = 16?',
'["2", "4", "6", "8"]',
'4',
1
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which is a linear equation?',
'["x + 2 = 5", "x^2 + 3 = 4", "x^3 = 8", "x/2 = x"]',
'x + 2 = 5',
1
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which one is a variable?',
'["3", "x", "=", "5"]',
'x',
1
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'How many degrees are in a triangle?',
'["180", "90", "360", "45"]',
'180',
2
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What shape has four equal sides?',
'["Rectangle", "Square", "Triangle", "Pentagon"]',
'Square',
2
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the sum of interior angles in a quadrilateral?',
'["360", "180", "90", "720"]',
'360',
2
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which has three sides?',
'["Triangle", "Square", "Circle", "Hexagon"]',
'Triangle',
2
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is a right angle?',
'["90 degrees", "45 degrees", "180 degrees", "360 degrees"]',
'90 degrees',
2
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the derivative of x^2?',
'["2x", "x", "x^2", "1"]',
'2x',
3
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What does a derivative represent?',
'["Slope", "Area", "Volume", "Length"]',
'Slope',
3
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the integral of 1/x?',
'["ln|x|", "x", "1", "x^2"]',
'ln|x|',
3
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the limit of x→0 for sin(x)/x?',
'["1", "0", "Infinity", "Undefined"]',
'1',
3
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is ∫x dx?',
'["(1/2)x^2 + C", "x^2", "2x", "ln(x)"]',
'(1/2)x^2 + C',
3
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'When did WWI begin?',
'["1914", "1939", "1945", "1900"]',
'1914',
4
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What sparked WWI?',
'["Assassination of Archduke", "Pearl Harbor", "Treaty signing", "Nuclear attack"]',
'Assassination of Archduke',
4
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Who was part of the Triple Entente?',
'["France, UK, Russia", "Germany, Austria, Italy", "USA, UK, France", "China, Japan, USA"]',
'France, UK, Russia',
4
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'When did WWI end?',
'["1918", "1945", "1939", "1925"]',
'1918',
4
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What treaty ended WWI?',
'["Treaty of Versailles", "Treaty of Paris", "Treaty of Yalta", "Treaty of Rome"]',
'Treaty of Versailles',
4
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'When did World War II begin?',
'["1939", "1940", "1914", "1945"]',
'1939',
5
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which countries were part of the Axis Powers?',
'["Germany, Italy, Japan", "USA, UK, USSR", "France, Poland, UK", "Spain, Portugal, Turkey"]',
'Germany, Italy, Japan',
5
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What event led the USA to join WWII?',
'["Pearl Harbor", "D-Day", "Battle of the Bulge", "Berlin Blockade"]',
'Pearl Harbor',
5
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What was the Holocaust?',
'["Genocide of Jews", "Military operation", "Code name for invasion", "Economic crisis"]',
'Genocide of Jews',
5
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which conference decided post-war Europe?',
'["Yalta", "Versailles", "Geneva", "NATO Summit"]',
'Yalta',
5
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Who were the main rivals in the Cold War?',
'["USA and USSR", "UK and Germany", "China and Japan", "France and Italy"]',
'USA and USSR',
6
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What symbolized the Cold War division?',
'["Berlin Wall", "White House", "Tower of London", "Pyramids"]',
'Berlin Wall',
6
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'When did the Berlin Wall fall?',
'["1989", "1991", "1945", "1970"]',
'1989',
6
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What was the Cuban Missile Crisis?',
'["Nuclear standoff", "Trade deal", "Space race", "Spy scandal"]',
'Nuclear standoff',
6
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What does NATO stand for?',
'["North Atlantic Treaty Organization", "Nuclear Agreement Trade Office", "Neutral Atlantic Treaty Order", "National Army Treaty Operation"]',
'North Atlantic Treaty Organization',
6
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the capital of France?',
'["Paris", "London", "Rome", "Berlin"]',
'Paris',
7
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the capital of Japan?',
'["Tokyo", "Beijing", "Seoul", "Bangkok"]',
'Tokyo',
7
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the capital of Canada?',
'["Ottawa", "Toronto", "Vancouver", "Montreal"]',
'Ottawa',
7
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the capital of Australia?',
'["Canberra", "Sydney", "Melbourne", "Perth"]',
'Canberra',
7
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the capital of Brazil?',
'["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"]',
'Brasília',
7
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'How many continents are there?',
'["7", "6", "5", "8"]',
'7',
8
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which is the largest ocean?',
'["Pacific", "Atlantic", "Indian", "Arctic"]',
'Pacific',
8
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which continent is Egypt in?',
'["Africa", "Asia", "Europe", "Australia"]',
'Africa',
8
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the smallest continent?',
'["Australia", "Europe", "Antarctica", "South America"]',
'Australia',
8
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which ocean is east of Africa?',
'["Indian", "Atlantic", "Pacific", "Southern"]',
'Indian',
8
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which flag has a red circle on white?',
'["Japan", "Bangladesh", "South Korea", "China"]',
'Japan',
9
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which country has a maple leaf on its flag?',
'["Canada", "USA", "UK", "Australia"]',
'Canada',
9
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which country’s flag is red with five stars?',
'["China", "Vietnam", "North Korea", "Laos"]',
'China',
9
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which flag is blue and yellow?',
'["Ukraine", "Sweden", "Brazil", "Greece"]',
'Ukraine',
9
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which country has a tricolor of orange, white, and green?',
'["India", "Ireland", "Ivory Coast", "Italy"]',
'India',
9
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the unit of force?',
'["Newton", "Joule", "Watt", "Pascal"]',
'Newton',
10
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the speed of light?',
'["299,792,458 m/s", "3,000,000 m/s", "150,000 km/s", "1,000,000 m/s"]',
'299,792,458 m/s',
10
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What does E=mc^2 represent?',
'["Energy-mass equivalence", "Gravitational law", "Force equation", "Friction law"]',
'Energy-mass equivalence',
10
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which law states that for every action, there is an equal reaction?',
'["Newton\'s Third Law", "Ohm\'s Law", "Boyle\'s Law", "Law of Inertia"]',
'Newton\'s Third Law',
10
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is measured in volts?',
'["Electric potential", "Current", "Resistance", "Power"]',
'Electric potential',
10
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the symbol for water?',
'["H2O", "O2", "CO2", "NaCl"]',
'H2O',
11
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What element has the symbol Na?',
'["Sodium", "Nitrogen", "Neon", "Nickel"]',
'Sodium',
11
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which gas do plants absorb?',
'["CO2", "O2", "H2", "N2"]',
'CO2',
11
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the periodic table?',
'["Element chart", "Molecule map", "Acid chart", "Protein map"]',
'Element chart',
11
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the atomic number of carbon?',
'["6", "12", "14", "2"]',
'6',
11
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the basic unit of life?',
'["Cell", "Atom", "Organ", "Molecule"]',
'Cell',
12
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What part of the cell contains DNA?',
'["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"]',
'Nucleus',
12
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'What is the powerhouse of the cell?',
'["Mitochondria", "Nucleus", "Golgi apparatus", "Chloroplast"]',
'Mitochondria',
12
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which cells carry oxygen?',
'["Red blood cells", "White blood cells", "Neurons", "Platelets"]',
'Red blood cells',
12
);
INSERT INTO question (question, OPTIONS, correct_answer, quiz_id) VALUES (
'Which organelle makes proteins?',
'["Ribosome", "Nucleus", "Lysosome", "Chloroplast"]',
'Ribosome',
12
);