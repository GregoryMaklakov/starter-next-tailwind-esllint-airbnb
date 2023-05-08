import Head from "next/head";
import {
    Layount,
} from "../components";

export default function About() {
    return (
        <>
            <Head>
                <title>Name Project</title>
                <meta name="description" content="description" />
            </Head>
            <main className="flex w-full">
                <Layount className="w-full">
                    About
                </Layount>
            </main>
        </>
    );
}
