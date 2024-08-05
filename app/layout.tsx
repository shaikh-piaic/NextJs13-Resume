import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";
import Script from "next/script";
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
				<Script
					type='text/javascript'
					src='https://vdbaa.com/pun.php?section=General&pt=6&pub=126596&ga=g'></Script>
				<Script
					type='text/javascript'
					src='//pl23942191.highratecpm.com/86/75/b8/8675b85b91bf79de586b1db85257c2ba.js'></Script>
				<Script
					type='text/javascript'
					src='//tuckbrows.com/86/75/b8/8675b85b91bf79de586b1db85257c2ba.js'></Script>
				<GoogleAnalytics />
			</head>
			<body>{children}</body>
		</html>
	);
}
