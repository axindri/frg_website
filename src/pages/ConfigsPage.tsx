export const ConfigsPage = () => {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index}>ConfigsPage</div>
      ))}
    </div>
  );
};
