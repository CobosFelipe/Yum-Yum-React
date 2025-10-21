const ListTags = () => {
  const TH = ({ children, className = "" }) => {
    const baseClasses = "px-6 py-3 text-xs uppercase tracking-wider font-bold";

    return (
      <th scope="col" className={`${baseClasses} ${className}`}>
        {children}
      </th>
    );
  };

  const TD = ({ children, className = "" }) => {
    const baseClasses = "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600";

    return (
      <td className={`${baseClasses} ${className}`}>
        {children}
      </td>
    );
  };

  return {
    TH,
    TD,
  };
};

export default ListTags;
