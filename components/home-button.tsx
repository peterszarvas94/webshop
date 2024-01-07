export default function HomeButton() {
  return (
    <div className="absolute left-10 top-10">
      <a
        tabIndex={0}
        href="/"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-medium"
      >
        <svg
          stroke="white"
          fill="white"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path>
        </svg>
      </a>
    </div>
  );
}
