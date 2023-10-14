import Spinner from "@/components/atoms/shared/spinner";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner color="#6366f1" />
    </div>
  );
}
