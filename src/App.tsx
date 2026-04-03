import Illustration from "../public/assets/images/illustration-article.svg";
import Avatar from "../public/assets/images/image-avatar.webp";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-(--page-bg)">
      <article className="max-w-[min(24rem,90%)] rounded-2xl bg-white p-(--spacing-lg) shadow-[10px_10px_0px_black] ring-1">
        <img
          className="w-full rounded-2xl"
          src={Illustration}
          alt="HTML & CSS course illustration"
        />
        <div className="mt-(--spacing-lg) flex flex-col gap-(--spacing-lg)">
          <div className="flex flex-col gap-(--spacing-md)">
            <div className="flex flex-col items-start gap-(--spacing-md)">
              <span className="rounded-md bg-(--page-bg) px-(--spacing-md) py-(--spacing-xs) text-sm leading-(--line-height) font-extrabold">
                Learning
              </span>
              <span className="text-sm leading-(--line-height)">
                Published <time dateTime="2023-12-21">21 Dec 2023</time>
              </span>
            </div>
            <h1>
              <a
                href="course" // fake route to follow best practices
                className="link-outline link-hover text-2xl font-extrabold"
              >
                HTML & CSS foundations
              </a>
            </h1>
            <p className="leading-(--line-height) text-(--color-muted)">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <a
            href="author" // fake route to follow best practices
            className="link-outline flex items-center gap-(--spacing-md)"
          >
            <img className="w-8" src={Avatar} alt="Course author avatar" />
            <span className="link-hover text-sm font-extrabold">
              Greg Hooper
            </span>
          </a>
        </div>
      </article>
    </div>
  );
}


export default App;
