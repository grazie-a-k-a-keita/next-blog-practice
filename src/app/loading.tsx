const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="h-8 w-8 animate-spin border-4 border-primary rounded-full border-t-transparent" />
      <p className="text-lg font-semibold">Loading</p>
    </div>
  );
};

export default Loading;
