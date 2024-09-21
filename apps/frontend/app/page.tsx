import { Button } from "@repo/ui/src/Atoms"

export default function Home() {
  return (
    <>
      <div className="w-full h-screen p-4 bg-gray-800">
        <div className="flex flex-col gap-4">
          <div className="text-white">
            This Is a test Page for the frontend
          </div>
          <Button label="Open alert" />
        </div>
      </div>
    </>
  );
}
