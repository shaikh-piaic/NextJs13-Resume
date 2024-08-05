import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

export const metadata = {
	title: "Shaikh Abdul Sami Portfolio",
	description: "Personal Portfolio",
	icons: {
		apple: [{ url: "/apple-icon.png" }],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<script
					type='text/javascript'
					src='https://vdbaa.com/pun.php?section=General&pt=6&pub=126596&ga=g'></script>
				<script
					type='text/javascript'
					src='//pl23942191.highratecpm.com/86/75/b8/8675b85b91bf79de586b1db85257c2ba.js'></script>
				<script
					type='text/javascript'
					src='//tuckbrows.com/86/75/b8/8675b85b91bf79de586b1db85257c2ba.js'></script>
				<GoogleAnalytics />
			</head>
			<body>{children}</body>
		</html>
	);
}
