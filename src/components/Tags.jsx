const Tags = ({ tagslist }) => {
  return (
    <ul className="tags">
      {tagslist.map((tag, index) => (
        <li key={tag + index}>{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
