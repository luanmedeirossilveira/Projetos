import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Skills() {
  return (
    <section className="flex justify-center items-center flex-col">
      <p className="text-xl">Habilidades</p>
      <h2 className="text-2xl font-bold">O que eu faço?</h2>

      <div className="flex gap-4 flex-row my-4">
        <Card className="py-4 px-10 border-sky-400 bg-transparent w-96">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
            <CardDescription>React, NextJS, TailwindCSS</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-normal">
              strive to create visually impact designs that effectively
              communicate ,messages & meet their unique needs.
            </p>
          </CardContent>
        </Card>
        <Card className="py-4 px-10 border-sky-400 bg-transparent w-96">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
            <CardDescription>NodeJS, Spring Boot, Fast API</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-normal">
              strive to create visually impact designs that effectively
              communicate ,messages & meet their unique needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
