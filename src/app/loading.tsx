import Spinner from "@/components/atoms/shared/spinner";

export default function Loading() {
  return (
    <div aria-busy className="flex h-full w-full items-center justify-center bg-white">
      <Spinner color="#6366f1" />
    </div>
  );
}
