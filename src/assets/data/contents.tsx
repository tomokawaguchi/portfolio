export const filters = ["All", "Freelance", "_nology", "Personal", "ReactJS", "Java"];

export const projects = [
	{
		id: 1,
		title: "E-Commerce Shop",
		projectType: "_nology",
		techStack: ["ReactJS", "Firestore", "_nology"],
		github: "https://github.com/tomokawaguchi/ecshop-project",
		liveSite: "https://ecshop.tomok.dev/",
		content:
			"This is a mock e-commerce site built in ReactJS where you can browse socks as shop products. The products data is managed in Firestore with 2 main collections: 'products' and 'shoppingBag'. The 'products' collection holds all the products available in the store and 'shoppingBag' collection is used to manage the shopping cart items.",
		features: [
			"Instant update with wish list states across the app",
			"Products data management & items data to the Cart",
			"Shopping cart Live updates",
		],
		image: "ecom-shop.png",
		isFeatured: true,
	},
	{
		id: 2,
		title: "Google API Books Project",
		projectType: "_nology",
		techStack: ["ReactJS", "Google API", "_nology"],
		github: "https://github.com/tomokawaguchi/google-api-books-app-",
		liveSite: "https://google-api-books.tomok.dev",
		content:
			"This app allows you to search books via Google API and there are some options for users  to view the results by sorting them. The app was developed with react hooks with functional components. The SCSS modules are utilised for the styling of the app.",
		features: [
			"Search field takes keyword and returns the book results based on the keyword",
			"Sort toggle buttons allow users to see the different results sorted by relevant or newest",
			"Upon clicking the Load more button, another api call is made and fetch additional 12 books and showcase them",
		],
		image: "google-api.png",
		isFeatured: true,
	},
	{
		id: 3,
		title: "Employee List Full Stack App",
		projectType: "Personal",
		techStack: ["ReactJS", "Java", "Personal"],
		github: "https://github.com/tomokawaguchi/dcs-employee-list-app",
		liveSite: "",
		content:
			"This is a full stack app where it showcases a list of employees and a user can create a new employee, view a list of all employees, modify existing employee records and finally delete employee records via an app.",
		features: [
			"Full CRUD methods have been implemented in Spring Boot/Java",
			"Form has been implemented with basic vanilla JS validations",
			"Unit Tests have been written and implemented",
		],
		image: "employee-list.png",
		isFeatured: true,
	},
	{
		id: 4,
		title: "Minesweeper Console Project",
		projectType: "_nology",
		techStack: ["Java", "Spring Boot", "_nology"],
		github: "https://github.com/tomokawaguchi/minesweeper",
		liveSite: "",
		content: "This project was built in Java and it allows users to play a simplified mineesweeper game in a Java console.",
		features: [
			"It places mines at random places every play and ensured that the generated coordinates ar unique to each other",
			"When a cell with no numbers or mine, it reveals limited surrounding cells",
			"Number of mines nearby are accurately assigned.",
		],
		image: "minesweeper.png",
		isFeatured: true,
	},
	{
		id: 5,
		title: "Morse Code Translator",
		projectType: "_nology",
		techStack: ["VanillaJS", "_nology"],
		github: "https://github.com/tomokawaguchi/morse-code-translator-project",
		liveSite: "https://morse-code-translator.tomok.dev",
		content:
			"This is a translator mini app that allows you to translate English to morse code or morse code to English. Upon click the circle arrow icon, you can swap the translation function. When you do so, the current field value are clear out if there is any.",
		features: [
			"For English to morse code translator, it covers 26 alphabets letters, 10 numbers(0~9) and additional 11 symbols",
			"For morse code to English translator, it covers the same characters, numbers and symbols",
			"When invalid morse code/english is entered, it translates into replacement character �",
		],
		image: "morse-code-translator.png",
		isFeatured: false,
	},
	{
		id: 6,
		title: "Mock OS Project",
		projectType: "_nology",
		techStack: ["VanillaJS", "_nology"],
		github: "https://github.com/tomokawaguchi/google-api-books-app-",
		liveSite: "https://macos.tomok.dev/",
		content:
			"This is a project where I developed a mock Mac OS laptop. I have setup a laptop frame with CSS and develop apps and other items inside of it. Since this is a mock laptop screen, it is optimised for the screen size of 900px and larger only. There are 3 mocked apps available: Calender, Calculator, Terminal Apps",
		features: [
			"On Calender app, actual live dates are available and you can navigate through other months for both backwards/forwards",
			"The Calculator app functions as an ordinary calculator and this is achieved by utiling new Function()() constructor. ",
			"At the top section of Mac OS screen, dropdown menu  and utility menus are available for click actions",
		],
		image: "mock-os.png",
		isFeatured: true,
	},
	{
		id: 7,
		title: "Hangman Project",
		projectType: "_nology",
		techStack: ["Java", "_nology"],
		github: "https://github.com/tomokawaguchi/hangman-project",
		liveSite: "",
		content:
			"This is a project to write a logic of hangman game in Java console. Throughout the game process, the code is able to communicate with a user by utilising Scanner class. The prompt message ensures a user what to enter in a console and the inputs from the user will take consideration into the conditional logics in the code to progress a game.",
		features: [
			"This game allows users to guess by a letter or word. Game options are selected by a user.",
			"All of the game will be logged in a separate txt file with the game results information such as question word, result of the game and number of guess made",
			"A hangman gets drawn as a player makes a mistake",
		],
		image: "hangman.png",
		isFeatured: false,
	},
	{
		id: 8,
		title: "News App",
		projectType: "Personal",
		techStack: ["Java", "Personal"],
		github: "https://github.com/tomokawaguchi/newsApp",
		liveSite: "",
		content:
			"This is a mobile app project that I have developed as part of Udacity online course. This is a news app where 4 different categories of live news are displayed and the data is fetched from The Guardian API.",
		features: ["Live data being fetched via The Guardian API"],
		image: "news-mobile-app.png",
		isFeatured: false,
	},
	{
		id: 9,
		title: "St Stephen's School",
		projectType: "Freelance",
		techStack: ["VanillaJS", "SASS", "Freelance"],
		github: "",
		liveSite: "https://www.ststephens.wa.edu.au/",
		content:
			"This was developed for Key2Creative as a freelance work. The project was delivered in 10 days with 5 different template pages ensuring all the functionalities and design requirements are met.",
		features: ["Custom logic for the infinity alumni images panel", "Slider functionalities across the site were achieved with slick slider"],
		image: "ststephens-thumbnail.png",
		isFeatured: false,
	},
	{
		id: 10,
		title: "Affirm Care",
		projectType: "Freelance",
		techStack: ["VanillaJS", "SASS", "Freelance"],
		github: "",
		liveSite: "https://affirmcare.com.au/",
		content:
			"This was developed for Key2Creative as a freelance work. This project required some styling with shapes and animations implementations. I have delivered 6 different page templates ensuring that requirements are met.",
		features: ["Animations implemented on the homepage", "Custom styling were highly involved to meet the design requirements"],
		image: "affirm-care.png",
		isFeatured: false,
	},
	{
		id: 11,
		title: "ECU Strategic Plan",
		projectType: "Freelance",
		techStack: ["VanillaJS", "SASS", "Freelance"],
		github: "",
		liveSite: "https://strategicplan.ecu.edu.au/",
		content:
			"ECU needed a static website to nicely present their strategic plans for 2022 - 2026. The website was built in HTML, CSS/SCSS and Vanilla JavaScript. One of the most challenging aspects in the project was to develop a site that is accessible.",
		features: ["Tab and modal like functionalities are implemented across pages", "It allows you to navigate via tab key for accessibility"],
		image: "ecu-strategic-plan.png",
		isFeatured: false,
	},
	{
		id: 13,
		title: "Living Proud",
		projectType: "Freelance",
		techStack: ["WordPress", "JQuery", "SASS", "Freelance"],
		github: "",
		liveSite: "https://www.livingproud.org.au/",
		content:
			"Living Proud needed their website revamped while ensuring the site is accessible for divers users. As a freelance work, I have designed and developed a WordPress custom theme.",
		features: ["Custom theme development with minimal plugins usage", "The site allows you to navigate through with tab key"],
		image: "living-proud.png",
		isFeatured: false,
	},
];