import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Ahmed Falih",
	initials: "AF",
	url: "https://dillion.io",
	location: "Baghdad, Iraq",
	locationLink: "",
	description:
		"Backend & Frontend Developer UI/UX Designer. I love building things.",
	summary:
		"**Ahmed Falih** is a versatile entrepreneur and full-stack developer with expertise in both backend and frontend technologies. With a strong background in UI/UX design and project management, he has led various tech initiatives. As a verified bot developer on Discord and a hackathon winner, Ahmed is passionate about pushing technological boundaries and making a positive impact through his work. You can connect with him on [LinkedIn](https://linkedin.com/in/z7pz) or check out his projects on [GitHub](https://github.com/LukaHarambasic). Feel free to reach out via email at [ahmedfalihalkraidi@gmail.com](mailto:ahmedfalihalkraidi@gmail.com).",
	avatarUrl: "/me.png",
	skills: [
		"Typescript",
		"Rust",
		"Go",
		"React",
		"Next.js",
		"Node.js",
		"Postgres",
		"Docker",
		"Kubernetes",
		"CI/CD",
		"Git",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "hello@example.com",
		tel: "+9647733505294",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/z7pz",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/z7pz/",
				icon: Icons.linkedin,

				navbar: true,
			},
			
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "4MEG LTD",
			href: "https://4meg.net",
			badges: [],
			location: "Remote",
			title: "Software Enginner",
			logoUrl:
				"https://media.discordapp.net/attachments/733174085290557573/1273992243367247923/image.png?ex=66c0a13c&is=66bf4fbc&hm=ce5bd82cf36cc36cc890f8c2f6207c2dc24594dc84867b6412737dfe19c9ed1a&=&format=png&quality=lossless&width=662&height=662",
			start: "May 2019",
			end: "present",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},
		{
			company: "Kasper Maker",
			href: "https://kasper-maker.xyz",
			badges: [],
			location: "Remote",
			title: "Software Enginner",
			logoUrl:
				"https://media.discordapp.net/attachments/733174085290557573/1273991922737877002/image.png?ex=66c0a0f0&is=66bf4f70&hm=dc8a49d994d86e7bb73baa685ae06ad8532864fe266db3f5e8cc9eeb50cd1c6a&=&format=png&quality=lossless&width=640&height=640",
			start: "Jan 2024",
			end: "present",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},
	],
	education: [
		{
			school: "Maarif Baghdad School Dual Language",
			href: "#education",
			degree: "High School Degree",
			logoUrl:
				"https://scontent.fnjf7-2.fna.fbcdn.net/v/t39.30808-1/350852450_800464211319437_6765753032009272214_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=0dfXK-inj9UQ7kNvgHEnuEn&_nc_ht=scontent.fnjf7-2.fna&oh=00_AYAPLRFxPCjH2fU4zfW7mIYnwPLKa0abbURq10_OQcXCTQ&oe=66C51F52",
			start: "2018",
			end: "2024",
		},
	],
	projects: [
		{
			title: "Kasper Maker",
			href: "https://kasper-maker.xyz",
			dates: "Jan 2024 - Present",
			active: true,
			description:
				"Discord Bot Maker simplifies bot creation for Discord, offering easy drag-and-drop tools and customizable scripts for any community need.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://kasper-maker.xyz",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video: "https://github.com/z7pz/my-cdn/raw/main/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4",
		},
	],
	hackathons: [
		{
			title: "1st HurryApp Hackathon",
			dates: "June 2023",
			location: "Baghdad, Iraq",
			description:
				"1st place in the first Hurry App Hackathon by Aswar Academy and HUB 200 (as UI Designer/Frontend Developer).",
			image: "https://media.discordapp.net/attachments/733174085290557573/1274000629584494642/image.png?ex=66c0a90b&is=66bf578b&hm=13913e0ae6e39a0e9829b1ba1ba1c584f6bc5698fc7ac80a7d8f683374959d2b&=&format=webp&quality=lossless&width=640&height=640",
			mlh: "",
			links: [],
		},
		{
			title: "2nd HurryApp Hackathon",
			dates: "June 2023",
			location: "Baghdad, Iraq",
			description:
				"2nd place in second Hurry App Hackathon by Aswar Academy and HUB 200 (as Backend Developer).",
			image: "https://media.discordapp.net/attachments/733174085290557573/1274000629584494642/image.png?ex=66c0a90b&is=66bf578b&hm=13913e0ae6e39a0e9829b1ba1ba1c584f6bc5698fc7ac80a7d8f683374959d2b&=&format=webp&quality=lossless&width=640&height=640",
			mlh: "",
			links: [],
		},
	],
} as const;
