import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Global Creations & IT",
    description: "Where creative ideas come to life.",
    keywords: "web, design, development, data, analytics, graphics",
    authors: [{ name: "Global Creations & IT" }],
    openGraph: {
        title: "Global Creations & IT",
        description: "Where creative ideas come to life.",
        images: [
            {
                url: "https://globalcreationsit.co.uk/assets/images/meta/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Global Creations & IT",
            },
        ],
        type: "website",
    },
    icons: {
        icon: "https://globalcreationsit.co.uk/assets/images/meta/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen bg-white antialiased">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
