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
				<GoogleAnalytics />
			</head>
			<body>{children}</body>
		</html>
	);
}
