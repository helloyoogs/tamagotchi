import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      tamagotchi
      <Link href={'/containers/signup'}>
        Sign-up
      </Link>
      <Link href={'/containers/login'}>
        Login
      </Link>
      <Link href={'/containers/main'}>
        Main
      </Link>
      <Link href={'/containers/my'}>
       my character me, log
      </Link>
      <Link href={'/containers/eat'}>
        Eat
      </Link>
      <Link href={'/containers/sleep'}>
        Sleep
      </Link>
      <Link href={'/containers/play'}>
        Play
      </Link>
      <Link href={'/containers/not-found'}>
        Not-Found
      </Link>
      <Link href={'/containers/loading'}>
        Loading
      </Link>
      <Link href={'/containers/settings'}>
        Settings
      </Link>
    </div>
  );
}
