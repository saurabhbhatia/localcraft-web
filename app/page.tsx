"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold tracking-tight">HeroUI has been configured!</h1>
        <p className="text-lg opacity-80 max-w-lg">
          You are ready to start building your application with modern and beautiful components.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto mt-4">
          <Button color="primary" variant="shadow">
            Primary Button
          </Button>
          <Button color="secondary" variant="flat">
            Secondary Button
          </Button>
        </div>
      </main>
    </div>
  );
}
