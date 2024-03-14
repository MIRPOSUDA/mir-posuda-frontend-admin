export default function Notification() {
  return (
    <span className="absolute right-1 top-1">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-700"></span>
      </span>
    </span>
  );
}
