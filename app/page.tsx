import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">
        <h1 className="text-blue-500 underline">Go to Dashboard Page</h1>
        <div className="bg-green-700">
          <h1>Heelo</h1>
        </div>
      </Link>
    </main>
  );
}
