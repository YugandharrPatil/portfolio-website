const ABOUT_ME =
  "I build things on the internet and then take them apart to see why they work. Mostly self-taught. Permanently curious.";

const HACKER_ABOUT =
  "I like understanding how things work — all the way down. If it runs on a computer, I’ve probably tried to break it at least once.";

export default function About() {
  return (
    <main className="container mx-auto">
      <h1 className="heading">About Me</h1>
      <p className="text-center">{ABOUT_ME}</p>
    </main>
  );
}
